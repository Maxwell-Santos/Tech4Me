import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Voltar } from "../componentes/VoltarBtn"

import DetalhesCarregando from "../componentes/carregar/DetalhesCarregando"
import { formatarBRL } from "../utilidades/formatarBRL"
import { Adiciona, Remove } from "../componentes/quantidade-produto/Acoes"

export default function Detalhes() {
  const ESTOQUE = 12
  const { id } = useParams()

  const [produto, setProduto] = useState()
  const [quantidade, setQuantidade] = useState(0)
  const quantMaximo = quantidade === ESTOQUE

  useEffect(() => {
    fetch(`https://63069afec0d0f2b8011f9944.mockapi.io/produtos/${id}`)
      .then(resp => resp.json())
      .then(data => setProduto(data))
      .catch(error => console.error(error))
  }, [])

  return (
    <section
      id="detalhes"
      className={`min-h-[calc(100vh-25px)] p-0 flex items-center justify-center flex-col ${
        quantMaximo && "max-[995px]:mb-10 max-[425px]:mb-20"
      }`}
    >
      <Voltar />

      {!produto ? (
        <>
          <div className="flex items-center justify-center gap-8 flex-wrap bg-black/30 p-5 shadow-md min-[430px]:rounded-2xl text-zinc-100 max-[995px]:max-w-[500px] max-[995px]:mt-5">
            <img
              src={produto.imagem}
              className="min-[995px]:w-[350px] h-[350px] rounded-xl"
              alt={"imagem do doce " + produto.nome}
            />

            <div className="flex flex-col max-[995px]:items-center">
              <h3 className="max-[750px]:text-center text-start">
                {produto.nome}
              </h3>

              <p className="max-w-xl max-[995px]:text-center min-[430px]:text-lg">
                {produto.descricao}
              </p>

              <div className="mt-4 max-[430px]:text-center">
                <span className="text-price-card font-semibold text-3xl">
                  {formatarBRL(produto.preco)}
                </span>
                <sup className="text-zinc-300 ml-2">{produto.unidade}</sup>
                <span className="block p-1 max-[995px]:text-center">Estoque: {ESTOQUE}</span>
              </div>

              <div className="flex items-center mt-3 max-[995px]:justify-center justify-between flex-wrap gap-y-4">
                <div className="flex items-center gap-4 mx-auto md:mx-0">
                  <Remove
                    setQuantidade={setQuantidade}
                    quantidade={quantidade}
                  />

                  <span className="text-lg" title="quantidade selecionada do doce">{quantidade}</span>

                  <Adiciona
                    setQuantidade={setQuantidade}
                    quantidade={quantidade}
                    estoque={ESTOQUE}
                  />
                </div>

                <button
                  className="bg-btn hover:bg-btn-hover transition-all p-4 text-xl font-semibold px-10 rounded-md w-full max-w-[300px] uppercase tracking-wider disabled:bg-btn-disabled"
                  disabled={!quantidade}
                  title={"comprar o doce " + produto.nome}
                >
                  comprar
                </button>
              </div>
            </div>
          </div>
          <span
            className={`${
              quantMaximo
                ? "opacity-100 translate-y-3"
                : "opacity-0 translate-y-0"
            } bg-yellow-300 mt-2 p-2 px-4 rounded-md transition-all duration-300 shadow-md text-sm font-medium`}
          >
            Você selecionou o máximo disponível desse produto! Logo, logo iremos
            reabastecer 😉
          </span>
        </>
      ) : (
        <DetalhesCarregando />
      )}

      {produto && (
        <img
          src={produto.imagem}
          alt={`imagem em blur de fundo do doce ${produto.nome}`}
          className="absolute inset-0 bg-cover blur-2xl -z-10"
        />
      )}
    </section>
  )
}
