import './App.css'
import {Link} from 'react-router-dom'

function App() {
  const img = "https://ingresso-a.akamaihd.net/prd/img/movie/super-mario-bros/b7bd9bb8-f131-44dd-8082-667078bf2b22.jpg"
  return (
    <>
      <div>
        <img src={img} alt="" style={{width: "200px"}}/>
        <h3>Filmes</h3>
        <Link to="/listagem">Ver a listagem</Link>

      </div>
    </>
  )
}

export default App
