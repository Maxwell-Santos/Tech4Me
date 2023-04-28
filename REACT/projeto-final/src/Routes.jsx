import { Routes, Route } from "react-router-dom"

import App from "./App"
import Vitrine from "./paginas/Vitrine"
import Detalhes from "./paginas/Detalhes"
import Sobre from "./paginas/Sobre"
import Form from "./paginas/Form"
import NaoEncontrado from "./componentes/NaoEncontrado"

export default function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="vitrine" element={<Vitrine />} />
      
      <Route path="detalhes">
        <Route path=":id" element={<Detalhes />} />
      </Route>

      <Route path="sobre" element={<Sobre />} />
      <Route path="form" element={<Form />} />
      <Route path="*" element={<NaoEncontrado />} />
    </Routes>
  )
}
