import { NavLink } from 'react-router-dom'
import '../styles/link.css'

export function LinkContent({ to, children }) {
  return (
    <NavLink to={to} className={({ isActive }) => (isActive ? 'link active' : 'link')}>
      <span className="link-text">{children}</span>
    </NavLink>
  )
}
