import React from 'react'
import Filme from './Filme'

class TopFilmes extends React.Component {

  constructor(props) {
    super(props)

    this.state = { filmes: [] }
  }

  componentDidMount() {
    //fazer isso depois que o documento foi montado
    const mostrarDados = (dados) => {
      //setState chama um novo render
      this.setState({filmes: dados})
    }

    const url = "https://b571-189-113-68-7.ngrok-free.app/filmes"
    fetch(url).then(response => response.json()).then(mostrarDados)
  }

  componentDidUpdate(){
    //quando o componente ja foi montado pela primeira vez, ai da segunda para frente, ao invés de ir no componentDidMount, vai cair nesse método
    console.log("atualizou")
  }

  render() {
    const lista = []

    const handleExcluir = (id) => {
      const cbFilter = (item) => item.id !== id
      const cb = (atual) => ({filmes: atual.filmes.filter(cbFilter)})

      this.setState(cb)
    }

    for (const filme of this.state.filmes) {
      lista.push(<Filme key={new Date().valueOf()} filme={filme} handleDelete={handleExcluir}/>)
    }

    return (
      <div>
        <button onClick={() => {
          const novoItem = {id: "99", titulo: "Notebook", genero: "suspense", pessoa: "Ele/delas"} 
          const cbUpdate = (atual) => ({filmes: [novoItem, ...atual]})
          this.setState(cbUpdate)
          
          }}>Novo</button>
        <ul>{lista}</ul>
      </div>
    )
  }
}

export default TopFilmes