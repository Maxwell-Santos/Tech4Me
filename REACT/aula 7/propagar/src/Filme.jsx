import React from 'react'

class Filme extends React.Component {
  constructor(){
    super()

    this.state = {assistido: false, titulo: "A VOLTA DOS QUE NÃO FORAM"}
  }

  render(){
    const cbAlteracao = (atual) => ({assistido: !atual.assistido})
    const mudarLower = (prev) => ({titulo: prev.titulo.toLowerCase()})
    return (
      <div style={{background: "#383838", padding: "10px", borderRadius: "10px"}}>

        <h3>{this.state.titulo}</h3>

        <span style={{ marginRight: '10px'}}>
          Ja foi assistido? <strong>{this.state.assistido ? "Sim 😎" : "Ainda não😴" }</strong>
        </span>

        <button onClick={() => this.setState(cbAlteracao)}>Já assisti</button>
        <button onClick={() => this.setState(mudarLower)}>muda</button>
        {/* <HandleLowerCase />  */}

      </div>
    )
  }

}

function HandleLowerCase(props){
  return <button onClick={props.lower}>mudar título para caixa baixa</button>
}

export default Filme