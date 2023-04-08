export function ArrayFrutas(){
  const frutas = ["🍊", "🥝", "🍌"]
  const adicionaNovos = ["🥝", ...frutas, "🍓"]

  let lista = frutas.map(item => <span>{item}</span>)
  let listaNova = adicionaNovos.map(item => <span>{item}</span>)

  return (
    <div>
      <div>
        <h1>Lista antiga</h1>
        {lista}
      </div>
      <div>
        <h1>Lista nova</h1>
        {listaNova}
      </div>
    </div>
  )
}