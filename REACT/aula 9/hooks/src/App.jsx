import './App.css'
import Agua from './Agua'
import Liquido from '../Liquido'
import Temporizador from '../Temporizador'

function App() {
  const estilo = {fontSize: '20px'}

  return (
    <div className="App" style={estilo}>
      <Agua />
      {/* <Liquido /> */}
      <Temporizador />
    </div>
  )
}

export default App
