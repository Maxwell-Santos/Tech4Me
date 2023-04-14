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
    <>
      <h1 className="font-black text-title-primary drop-shadow-sm text-5xl py-2 mb-5 text-center">Produtos</h1>
      <div className="flex gap-3">
        {
          produtos.map(produto => (
            <Cartao key={produto.titulo} titulo={produto.titulo} info={produto.info}/>
          ))
        }
      </div>
    </>
  )
}

export default App
