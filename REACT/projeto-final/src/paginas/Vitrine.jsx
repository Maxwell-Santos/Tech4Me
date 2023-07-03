import React from "react"
import VitrineCarregando from "../componentes/carregar/VitrineCarregando"
import Cartao from "../componentes/Cartao"
import { Voltar } from "../componentes/VoltarBtn"

class Vitrine extends React.Component {
  constructor(props) {
    super(props)
    this.state = { doces: [] }
  }

  componentDidMount() {
    const url = "https://63069afec0d0f2b8011f9944.mockapi.io/produtos?loja=Aqui%20Doces"

    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ doces: data }))
      .catch(error => console.error(error))
  }
  
  render() {
    const doces = this.state.doces

    return (
      <>
      <Voltar toHome/>
      <section id="vitrine" className="max-[430px]:mb-20">
        <h1>Produtos</h1>

        {doces.length > 0 ? (
          <ul className="flex gap-3 flex-wrap justify-center">
            {doces.map(produto => (
              <Cartao key={produto.id} doce={produto} />
            ))}
          </ul>
        ) : (
          <VitrineCarregando />
        )}
      </section>
      </>

    )
  }
}

export default Vitrine
