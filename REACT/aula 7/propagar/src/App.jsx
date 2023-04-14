import React from 'react'

import './App.css'

import Item from './Item'
import Filme from './Filme'
import Carro from './Carro'
import Lista from './MudaLista'

class App extends React.Component {
  constructor() {
    super()
    this.state = { modelo: "Fusca" }
  }

  render() {
    console.log("Renderizou de novo")

    return (
      <>
        <div className="App">
          <h1>Substituição pronta</h1>
          <Item modelo={this.state.modelo} />

        </div>
        <button
          onClick={() => this.setState({ modelo: "Passat" })}
          style={{ marginTop: "20px" }}
        >
          mudar modelo
        </button>

        <hr />

        <h2>Filmes</h2>
        <Filme />

        <hr />
        <Carro />

        <hr />
        <Lista />
      </>
    )
  }
}

export default App
