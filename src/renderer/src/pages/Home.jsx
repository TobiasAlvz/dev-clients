import { Link } from 'react-router-dom'
import '../styles/home.css'
import { useQuery } from '@tanstack/react-query'


export default function Home() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['customers'],
    queryFn: () => window.api.fetchAllCustomers()
  })

  if (isLoading) {
    return <p className="home-loading">Carregando clientes...</p>
  }

  if (error) {
    return <p className="home-error">Erro ao carregar clientes</p>
  }
  // async function handleAdd() {
  //   const response = await window.api.fetchAllCustomers()
  //   console.log(response)
  // }

  // async function handleCutomerById() {
  //   const docId = '6a5612a1-852c-4461-b6a1-bdaeba4c30de'
  //   const response = await window.api.fetchCustomerById(docId)
  //   console.log(response)
  // }

  // // async function handleDelete() {
  // //   const docId = '4fe74824-8187-4a1e-8a49-970415e15600'
  // //   const response = await window.api.deleteCustomer(docId)
  // //   console.log(response)
  // }

  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className="home-title">Todos os clientes</h1>

        <Link to="/create" className="home-link">
          Novo cliente
        </Link>
      </header>

      <section className="home-list">
        {data?.map((customer) => (
          <Link to={`/customer/${customer._id}`} key={customer._id}>
            <div className="home-card" key={customer._id}>
              <p className="home-name">{customer.name}</p>

              <p>
                <span>Email:</span> {customer.email}
              </p>

              {customer.phone && (
                <p>
                  <span>Telefone:</span> {customer.phone}
                </p>
              )}
            </div>
          </Link>
        ))}
      </section>
    </div>
  )
}
