import React from 'react'

class AdicionaUm extends React.Component {
  constructor(){
    super()

    this.state = {contador: 0}
  }

  render(){
    const incremento = (atual) => {
      return {contador: atual.contador + 1 }
    }
    
    return (
      <>
      <h1>{this.state.contador}</h1>

      <button onClick={() => this.setState(incremento)}>Adiciona 1</button>
      </>
    )
  }
}

export default AdicionaUm