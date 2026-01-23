import {useQuery, useMutation, useQueryClient} from '@tanstack/react-query';
import {useParams, useNavigate} from 'react-router-dom';
import {useRef} from 'react';
import '../styles/edit.css';

export default function Edit () {
  const {id} = useParams ();
  const navigate = useNavigate ();
  const queryClient = useQueryClient ();

  const nameRef = useRef (null);
  const emailRef = useRef (null);
  const phoneRef = useRef (null);
  const addressRef = useRef (null);
  const roleRef = useRef (null);

  const {data} = useQuery ({
    queryKey: ['customer', id],
    queryFn: () => window.api.fetchCustomerById (id),
    enabled: !!id,
  });

  const mutation = useMutation ({
    mutationFn: doc => window.api.updateCustomer (doc),
    onSuccess: () => {
      queryClient.invalidateQueries (['customers']);
      navigate ('/');
    },
  });

  if (!data) return null;

  function handleSubmit (e) {
    e.preventDefault ();

    mutation.mutate ({
      _id: data._id,
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      address: addressRef.current.value,
      role: roleRef.current.value,
      status: data.status,
    });
  }
 return (
  <div className="edit-container">
    <form className="edit-form" onSubmit={handleSubmit}>
      <h2 className="edit-title">Editar cliente</h2>

      <input defaultValue={data.name} ref={nameRef} placeholder="Nome" />
      <input defaultValue={data.email} ref={emailRef} placeholder="E-mail" />
      <input defaultValue={data.phone} ref={phoneRef} placeholder="Telefone" />
      <input defaultValue={data.address} ref={addressRef} placeholder="Endereço" />
      <input defaultValue={data.role} ref={roleRef} placeholder="Cargo" />

      <button type="submit" disabled={mutation.isLoading}>
        {mutation.isLoading ? 'Salvando...' : 'Salvar alterações'}
      </button>
    </form>
  </div>
);