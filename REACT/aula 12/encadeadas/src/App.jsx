import './App.css'
import { Link } from 'react-router-dom'
function App() {

  return (
    <>
    <div>
      <h2>Filmes por gêneros</h2>

      <nav>
        <Link to="generos/comedia">Comédia</Link>
        <Link to="generos/drama">Drama</Link>
      </nav>
    </div>
    </>
  )
}

export default App