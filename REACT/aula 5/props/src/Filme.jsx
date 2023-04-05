import { useState } from 'react'
import './App.css'

export function Filme (props){
  const [active, setActive] = useState(false)

  return (
    <div
    className={`${active ? 'active' : 'desactived'} filme`} 
    onClick={() => setActive(!active)}>
      <p><span className='name'>titulo:</span> {props.titulo}</p>
      <p><span className='name'>gênero:</span> {props.genero}</p>
      <h3>{props.disponivel}</h3>
    </div>
  )
}
