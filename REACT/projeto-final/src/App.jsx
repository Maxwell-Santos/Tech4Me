import Cartao from "./Cartao"

function App() {
  const produtos = [
    {
      titulo: "Macaron",
      info: "Diretamente da França, este biscoito de massa crocante por fora e macia por dentro promete adoçar sua vida. Colorido e saboroso, é acompanhado por sabores como maracujá, blueberry, lavanda, abacaxi e chocolate, a depender da cor. Bon Appétit!",
    },
    {
      titulo: "Copo da felicidade",
      info: "Copos regados de tudo que é mais gostoso: cookie, brownie, brigadeiro, doce de leite, gotas de chocolate, bombom, tudo a depender do cliente. Impossível não ser feliz com tanta doçura, né?"
    }
  ]

  return (
    <div>
      <h1>Produtos</h1>
      <div className="flex gap-3">
        {
          produtos.map(produto => (
            <Cartao key={produto.titulo} titulo={produto.titulo} info={produto.info}/>
          ))
        }
      </div>
    </div>
  )
}

export default App
