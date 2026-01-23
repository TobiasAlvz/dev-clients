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
    <div>
      <h1>duahsiudhasoid</h1>
    </div>
  );
}
