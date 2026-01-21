import { Link } from 'react-router-dom'
import Container from '../components/Container'
import '../styles/home.css'

export default function Home() {
  async function handleAdd() {
    const response = await window.api.fetchAllCustomers()
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
    </Container>
  )
}
