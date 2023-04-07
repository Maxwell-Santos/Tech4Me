import React from 'react'

class Estados extends React.Component {
  constructor() {
    super() //faz esse componente ter as propriedades da classe pai nesse caso React.Component
    //se quiser usar props, tem que pegar no construtor e e passar no super também

    this.state = { titulo: "inicial", numero: 19 }
  }

  handleSortear() {
    this.setState({ numero: Math.random() * 13 + 1 })
  }

  render() {
    return (
      <>
        <section>
          {/* <h1>{this.state.titulo}</h1> */}
          <h1>{this.state.numero}</h1>

          <button
            onClick={() => this.handleSortear()}>
            Mudar valor
          </button>
        </section>

        <section style={{marginTop: "100px"}}>
          <span style={{marginRight: "10px"}}>Adicionando mais 1</span>
          <button
            onClick={() => this.handleSortear()}>
            Mudar valor
          </button>
        </section>
      </>
    )
  }
}

export default Estados