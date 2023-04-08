export function Transporte(){
  const pedidos = ["Caixa de som JBL", "Motorola Moto G7", "Mouse Pad", "I Phone X"]

  return(
    <div>
      <h2>Itens Recebidos</h2>
      <ul>
        {pedidos.map(item => <li key={item}>{item}</li>)}
      </ul>
    </div>
  )
}