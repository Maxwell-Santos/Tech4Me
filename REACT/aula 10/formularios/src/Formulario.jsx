import { useEffect, useState } from "react"

export default function Formulario() {
  // adicionando um retorno no useEffect, você simulo a desmontagem do componente

  useEffect(function () {
    console.log("montou")

    return function () {
      console.log("desmontou")
    }
  }, [])

  function handleEvento(evento) {
    evento.preventDefault()
  }

  const [nome, setNome] = useState("")

  return (
    <>
      <form
        onSubmit={handleEvento}
        style={{ display: "flex", flexDirection: "column", gap: "30px" }}
      >
        <div className="">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            placeholder="seu nome completo"
            onChange={event => setNome(event.targe.value)}
          />
        </div>
        <button style={{ flex: 1 }}>enviar</button>
      </form>
    </>
  )
}
