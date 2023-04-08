export function Recebidas(){
  const pedidos = ["Caneca", "Playstation 5", "Notebook Positivo"]
  return(
    <div>
      <h2>Itens Recebidos</h2>
      <ul>
        {pedidos.map(item => <li key={item}>{item}</li>)}
      </ul>
    </div>
  )
}