import { LinkContent } from './link'

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <span className="menu-title">Menu</span>
        <LinkContent to="/">Clientes</LinkContent>
        <LinkContent to="/create">Cadastrar Clientes</LinkContent>
        <LinkContent to="/about">Sobre</LinkContent>
      </nav>
    </aside>
  )
}
