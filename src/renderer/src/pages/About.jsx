import { useQuery } from '@tanstack/react-query'

export default function About() {



  
  const { data, isLoading, error } = useQuery({
    queryKey: ['verion-app'],
    queryFn: () => window.api.gerVersionApp()
  })
  if (isLoading) {
    return <p className="detail-loading">Carregando...</p>
  }

  if (error) {
    return <p className="detail-error">Página não encontrada</p>
  }

  return (
    <div className="about-container">
      <h1 className="about-title">Página sobre</h1>

      <p className="about-text">
        Projeto desenvolvido por <strong>Tobias</strong>
      </p>

      <p className="about-text">
        Versão atual do projeto<strong>{data}</strong>
      </p>
    </div>
  )
}
