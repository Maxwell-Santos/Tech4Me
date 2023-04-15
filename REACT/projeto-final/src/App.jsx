import React from "react"
import Cartao from "./Cartao"

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = { doces: [] }
  }

  componentDidMount() {
    const url = "http://localhost:3000/doces"

    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ doces: data }))
      .catch(error => console.error(error))
  }

  render() {
    const doces = this.state.doces

    return (
      <main className="mb-32">
        <h1 className="font-black text-title-primary drop-shadow-sm text-5xl py-2 mb-5 text-center">
          Produtos
        </h1>

        {
          doces.length > 0 ? (
            <ul className="flex gap-3 flex-wrap p-5 justify-center">
              {
                doces.map(produto => (
                  <Cartao key={produto.id} doce={produto} />
                ))
              }
            </ul>
          ) : <span className="text-center block mt-10">Carregando...</span>
        }
      </main>
    )
  }
}

export default App
