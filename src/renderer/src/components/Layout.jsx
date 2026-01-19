import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'

export default function Layout() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div>
        <Header />
        <Outlet />
      </div>
    </div>
  )
}
