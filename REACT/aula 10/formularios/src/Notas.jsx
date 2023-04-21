import { useState } from "react"

export default function Notas() {
  const [texto, setTexto] = useState("")
  const [lista, setLista] = useState([
    { id: new Date().toLocaleString(), texto: "primeira nota" },
  ])

  function adicionar() {
    const nota = { id: new Date().toLocaleString(), texto }
    setLista(atual => [nota, ...atual])
    setTexto("")
  }
  return (
    <>
      <h1>Adicionando notas</h1>

      <div>
        <h2>EXEMPLO DA NOTA</h2>
      </div>

      <form>
        <input
          type="text"
          name="name"
          value={texto}
          onChange={event => setTexto(event.target.value)}
        />
        <button type="button" onClick={() =>adicionar()}>
          Adicionar nota
        </button>
      </form>

        <Nota texto={texto ? texto : "Sua nova nota"} />
        <div className="lista-notas">
          {lista.map(item => (
            <Nota texto={item.texto} />
          ))}
        </div>
    </>
  )
}

const Nota = ({ texto }) => {
  return (
  <div class="nota">
    <p>{String(texto)}</p>
  </div>
  )
}
