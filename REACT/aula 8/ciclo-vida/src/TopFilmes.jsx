import React from 'react'
import Filme from './Filme'

class TopFilmes extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      filmes: [{ id: "99", titulo: "Notebook", genero: "suspense", pessoa: "Ele/delas" },
      { id: "98", titulo: "Notebook2", genero: "suspense", pessoa: "Ele/delas" },
      { id: "97", titulo: "Notebook3", genero: "suspense", pessoa: "Ele/delas" },
      { id: "96", titulo: "Notebook4", genero: "suspense", pessoa: "Ele/delas" }]
    }
  }

  componentDidMount() {
    //fazer isso depois que o documento foi montado
    const mostrarDados = (dados) => {
      //setState chama um novo render
      this.setState({ filmes: dados })
    }

    const url = "https://b571-189-113-68-7.ngrok-free.app/filmes"
    fetch(url).then(response => response.json())
      .then(mostrarDados)
      .catch(error => console.error(error))
  }

  componentDidUpdate() {
    //quando o componente ja foi montado pela primeira vez, ai da segunda para frente, ao invés de ir no componentDidMount, vai cair nesse método
    console.log("atualizou")
  }

  render() {
    const lista = []

    const handleExcluir = (id) => {
      const cbFilter = (item) => item.id !== id
      const cb = (atual) => ({ filmes: atual.filmes.filter(cbFilter) })

      this.setState(cb)
    }
    for (const filme of this.state.filmes) {
      lista.push(<Filme key={filme.id} filme={filme} handleDelete={handleExcluir} />)
    }

    if (lista.length > 0) return (
      <div>
        <button onClick={() => {
          const novoItem = {
            id: new Date().valueOf(),
            titulo: "Notebook",
            genero: "suspense",
            pessoa: "Esse é novo" + new Date().toLocaleString()
          }

          const cbUpdate = (atual) => ({ filmes: [novoItem, ...atual.filmes] })

          this.setState(cbUpdate)
        }}>
          Novo
        </button>

        <ul>{lista}</ul>
      </div>
    )
    return <span>Carregando...</span>
  }
}

export default TopFilmes