import { Outlet, useNavigate } from 'react-router-dom'

import '../styles/layout.css'
import Header from './Header'
import Sidebar from './Sidebar'
import { useEffect } from 'react'

export default function Layout() {
  const navigate = useNavigate()

  useEffect(() => {
    if (!window.api) return

    function handleNavigate() {
      navigate('/create')
    }

    const unsubscribe = window.api.onNewCustomer(handleNavigate)

    return () => {
      unsubscribe()
    }
  }, [navigate])

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
