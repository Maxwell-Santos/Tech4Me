import React from 'react'

class Lista extends React.Component {
  constructor() {
    super()

    const lista = [{ marca: "Fiat", modelo: "Uno" }]
    this.state = { lista }
  }
  render() {
    //precisa do parenteses depois da arrow para mostrar que está retornando um objeto, sem os parentes, a função entende que é um bloco de código, não objeto
    const addCarro = (atual) => ({
      lista: [...atual.lista, { marca: "Fiat", modelo: "Argo" }]
    })
    const handleAddCarro = () => this.setState(addCarro)


    const excluir = () => this.setState((atual) => ({
      lista: atual.lista.filter(item => item.modelo != "Argo")
    }))

    const modificar = () => {
      function cbTroca (atual) {
        const l = atual.lista.map((item) => item.modelo == "Argo" && {...item, modelo: "Sei la"})

        return l
      }

      this.setState(cbTroca)
    }
    return (
      <div>
        <ul>
          {
            this.state.lista.map(item => (
              <li key={item}>
                <span>{item.marca}</span>
                <span>{item.modelo}</span>
              </li>
            ))
          }
        </ul>
        <button onClick={handleAddCarro}>Adiciona Carro novo</button>
        <button onClick={excluir}>Excluir o Argo</button>
        <button onClick={modificar}>mudar para sei la</button>
      </div>
    )
  }
}

export default Lista