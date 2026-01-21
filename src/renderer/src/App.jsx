import Routes from './Routes'
import './styles/app.css'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/react-query'

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app-container">
        <Routes />
      </div>
    </QueryClientProvider>
  )
}
