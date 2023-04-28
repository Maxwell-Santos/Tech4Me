import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Listagem } from './Listagem.jsx'
import { NaoEncontrado } from './NaoEncontrado.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='listagem' element={<Listagem />} />
      <Route path='*' element={<NaoEncontrado />} />
    </Routes>
      
    </BrowserRouter>
  </React.StrictMode>,
)
