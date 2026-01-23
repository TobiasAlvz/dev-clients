import { BrowserRouter, Routes as RouterRoutes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Detail from './pages/detail'
import About from './pages/About'
import Create from './pages/create'
import Layout from './components/Layout'
import Edit from './pages/edit'

export default function Routes() {
  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="create" element={<Create />} />
          <Route path="about" element={<About />} />
          <Route path="/customer/:id" element={<Detail />} />
          <Route path="/edit" element={<Edit />} />
        </Route>
      </RouterRoutes>
    </BrowserRouter>
  )
}
