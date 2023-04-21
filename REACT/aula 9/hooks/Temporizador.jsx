import React from "react"

function Temporizador(){
  const state = React.useState("incio")
  const setState = state[1]

  // atualizar um estado dentro de uma função de effect, desencadeia loop infinito, pois o effect é executado sempre quando o componente renderiza, e a att de estado faz o elemento re-renderizar
  function manipulador(){
    console.log("passou no effect")
    const cbTimeOut = () => setState("att.")

    setTimeout(cbTimeOut, 1000)
  }
  
  React.useEffect(manipulador, [])

  return (
    <>
    <button onClick={() => setState("botao")}>mudar</button>
    <h2>{state[0]}</h2>
    {new Date().toLocaleString()}
    </>
  )
}

export default Temporizador