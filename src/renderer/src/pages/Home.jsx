import { Link } from 'react-router-dom'
import Container from '../components/Container'
import '../styles/home.css'

export default function Home() {
  async function handleAdd() {
    const response = await window.api.fetchAllCustomers()
    console.log(response)
  }

  async function handleCutomerById() {
    const docId = '6a5612a1-852c-4461-b6a1-bdaeba4c30de'
    const response = await window.api.fetchCustomerById(docId)
    console.log(response)
  }

  return (
    <Container>
      <h1 className="home-title">Página HOME!!!</h1>
      <p className="home-subtitle">TESTEEEEEEE</p>

      <Link to="/create" className="page-link">
        Ir para pagina create
      </Link>
      <br></br>

      <button onClick={handleAdd} className="btn-primary">
        Buscar usuários
      </button>
      <br></br>
      <button onClick={handleCutomerById} className="btn-primary">
        Buscar usuário pelo Id
      </button>
    </Container>
  )
}
