import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Comedia from './Comedia'
import Drama from './Drama'
import Genero from "./Genero.jsx"


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

        <Route path="generos" element={<Genero />}>
          <Route path="comedia" element={<Comedia />} />
          <Route path="drama" element={<Drama />} />
        </Route>
          <Route path="*" element={<img src="https://neilpatel.com/wp-content/uploads/2019/05/ilustracao-sobre-o-error-404-not-found.jpeg"/>} />
      </Routes>

      <footer className="read-the-docs">@2023 MaxwellFlix </footer>
    </BrowserRouter>
  </React.StrictMode>
)
