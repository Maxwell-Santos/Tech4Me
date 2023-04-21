import { useState } from "react"
import Escolher from "./Materias"

export default function Roteador() {
  const [curso, setCurso] = useState("comp")

  return (
    <div>
      <form>
        <label htmlFor="hist">HISTÓRIA</label>
        <input
          type="radio"
          name="hist"
          id="hist"
          value="hist"
          checked={curso === "hist"}
          onChange={event => setCurso(event.target.value)}
        />

        <label htmlFor="comp">COMPUTAÇÃO</label>
        <input
          type="radio"
          name="comp"
          id="comp"
          value="comp"
          checked={curso === "comp"}
          onChange={event => setCurso(event.target.value)}
        />
      </form>

      <h3>Curso escolhendo</h3>

      <Escolher cursoEscolhido={curso}/>
    </div>
  )
}
