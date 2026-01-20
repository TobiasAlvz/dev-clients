import { Link } from 'react-router-dom'
import Container from '../components/Container'
import '../styles/home.css'

export default function Home() {
  async function handleAdd() {
    const response = await window.api.fetchUsers()
    console.log(response)
  }

  async function handleCustomerById() {
    const docId = ''

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

      <button className="btn-primary" onClick={handleAdd}>
        Buscar usuários
      </button>

      <button onClick={handleCustomerById}>BUSCAR USUARIO PELO ID</button>
    </Container>
  )
}
