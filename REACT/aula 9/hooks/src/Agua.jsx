import React from 'react'

class Agua extends React.Component {
  constructor(){
    super()

    this.state = { vasilhame: "Copo", capacidade: 0.5}
  }

  
  render(){

    return (
      <div>
        <h1>Água</h1>
        <p>A água está no {this.state.vasilhame}</p>
        <p>e tem a capacidade de: {this.state.capacidade}</p>
      </div>
    )
  }
}

export default Agua