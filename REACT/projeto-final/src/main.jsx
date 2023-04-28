import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

import Cabecalho from "./componentes/Cabecalho"
import Footer from "./componentes/Footer"
import Rotas from "./Routes"

import "./styles/index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Cabecalho />
      <Rotas />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)
