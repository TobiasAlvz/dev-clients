import { Outlet } from 'react-router-dom'

import '../styles/layout.css'
import Header from './Header'
import Sidebar from './Sidebar'

export default function Layout() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="layout-content">
        <Header />

        <main className="layout-main">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
