import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useParams, Link, useNavigate } from 'react-router-dom'
import '../styles/detail.css'

export default function Detail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const { data, isLoading } = useQuery({
    queryKey: ['customer', id],
    queryFn: () => window.api.fetchCustomerById(id),
    enabled: !!id
  })

  const deleteMutation = useMutation({
    mutationFn: (customerId) => window.api.deleteCustomer(customerId),
    onSuccess: () => {
      ;(queryClient.invalidateQueries({ queryKey: ['customers'] }), navigate('/'))
    }
  })

  if (isLoading) {
    return <p>Carregando cliente</p>
  }

  if (!data) {
    return <p>Cliente não existe</p>
  }

  return (
    <main className="detail-container">
      <Link to="/" className="detail-back">
        Voltar
      </Link>
      <h1 className="detail-title">Detalhes do Cliente</h1>

      <div className="detail-card">
        <section className="detail-section">
          <p className="datail-name">{data.name}</p>

          <p className="datail-email">{data.email}</p>

          <p className="datail-adress">{data.Adress}</p>

          <p className="datail-phone">{data.phone}</p>

          <button
            className="detail-delete"
            onClick={() => deleteMutation.mutate(data._id)}
            disabled={deleteMutation.isPending}
          >
            {deleteMutation.isPending ? 'Deletando...' : 'Deletar Cliente'}
          </button>
        </section>
        <section className="detail-section">
          <p className="datail-role">{data.role}</p>

          <p className="datail-role">{data.status ? 'ATIVO' : 'INATIVO'}</p>
        </section>
        <Link to="/edit" className="detail-back">
          Editar
        </Link>
      </div>
    </main>
  )
}
