import React from 'react'

class Filme extends React.Component {

  componentWillUnmount() {
    //executar alguma coisa quando o componente for desmontado
    console.log("componente ta prestes a ser destruído")
  }

  render() {

    const filme = this.props.filmes

    return <li key={`f-${filme.id}`}>
      <h2>{filme.titulo}</h2>
      <span>{filme.genero}</span>
      <div className=""><strong>Nome: {filme.pessoa}</strong></div>

      <button 
      onClick={() => this.props.handleDelete(filme.id)}
      style={{background: "#ff0000a7", }}>deletar</button>
    </li>
  }
}
export default Filme