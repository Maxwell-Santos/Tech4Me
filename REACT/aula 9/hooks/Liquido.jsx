import React from 'react'

export default function Liquido() {

  const vasilhameState = React.useState("garrafa")
  const vasilhame = vasilhameState[0]
  const setVasilhame = vasilhameState[1]

  const capacidadeState = React.useState(1.0)
  const capacidade = capacidadeState[0]
  const setCapacidade = capacidadeState[1]


  return (
    <div>
      Vasilhame: {vasilhame}
      Volume do vasilhame: {capacidade}
      <button onClick={() => setCapacidade(2.0)}>Mudar a capacidade da {vasilhame}</button>
    </div>
  )
}