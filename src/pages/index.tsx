export default function Home(props) {
  return (
    <div>
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()
 
  return{
    // Vai retornar as propriedades da minha requisição
    props: {
      episodes: data,
    }, 
    // Vai fazer uma nova requisição após 8 horas - Tempo em segundos
    revalidate : 60 * 60 * 8,
  }
}
