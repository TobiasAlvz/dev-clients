import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <br />
      <NavLink to="/about">Sobre</NavLink>
    </nav>
  )
}
