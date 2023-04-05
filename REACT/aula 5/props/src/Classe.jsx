import React from 'react'

class ComponenteClasse extends React.Component {
  render(){
    return (
      <div className='filme'>
        <h3>Agora vai com classe malandro !!</h3>
        <p><span>Titulo: </span>{this.props.titulo}</p>
        <p><span>Gênero: </span>{this.props.genero}</p>
      </div>
    )
  }
}

export default ComponenteClasse