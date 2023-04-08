export function Entregues() {
  const pedidos = [
    {
      recebida: "destinatário",
      produto: "Camiseta Polo"
    },
    {
      recebida: "Carlos (outra pessoa)",
      produto: "Tênis Nike"
    },
    {
      recebida: "destinatário",
      produto: "Notebook Acer"
    }
  ]
  return (
    <div>
      <h2>Entregues</h2>
      <ul>
        {
          pedidos.map(item => (
            <li key={item.produto} style={{ marginBottom: "10px" }}>
              <span style={{ display: "block" }}>
                <strong>Recebido por:</strong> {item.recebida}
              </span>
              
              <span>
                <strong>Produto:</strong> {item.produto}
              </span>
            </li>
          ))
        }
      </ul>
    </div>
  )
}