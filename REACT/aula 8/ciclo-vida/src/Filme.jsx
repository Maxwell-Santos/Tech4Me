import React from 'react'

class Filme extends React.Component {

  //não necessariamente precisa do constructor para acessar as props
  componentWillUnmount() {
    //executar alguma coisa quando o componente for desmontado
    console.log("componente ta prestes a ser destruído", this.props.filme.id)
  }

  render() {

    const filme = this.props.filme

    return <li key={`f-${filme.id}`} style={{borderBottom: "1px solid white", marginBottom: "10px"}}>
      <span><strong>{filme.titulo}</strong></span> <span>- {filme.id}</span>
      <p>{filme.genero}</p>
      <div className=""><strong>Nome: {filme.pessoa}</strong></div>

      <button 
      onClick={() => this.props.handleDelete(filme.id)}
      style={{background: "#ff0000a7", }}>deletar</button>
    </li>
  }
}
export default Filme