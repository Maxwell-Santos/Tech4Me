import React from 'react'

class Carro extends React.Component {
  constructor(){
    super()

    //se dentro do state tem um atributo que é objeto, quando for atribuir um novo valor para ele, precisa passar todos os valores, senão ele perde o atributo que você não mudou
    // uma alternativa para mudar apenas um atributo, basta usar o SPREAD
    const carro = {marca: "Fiat", modelo: "Uno"}
    this.state = {carro}
  }

  render(){
    const fnMudar = (atual) => ({carro: {...atual.carro, modelo: "Argo"}})

    return (
      <div>
        <h2>Marca: {this.state.carro.marca}</h2>
        <h2>Modelo: {this.state.carro.modelo}</h2>

        <button onClick={() => this.setState(fnMudar)}>Mudar modelo</button>
      </div>
    )
  }
}

export default Carro