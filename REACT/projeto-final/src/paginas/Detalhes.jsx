import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Voltar } from "../componentes/VoltarBtn"

import { DetalhesCarregando } from "../componentes/carregar/DetalhesCarregando"

export default function Detalhes() {
  const { id } = useParams()

  const [produto, setProduto] = useState()

  useEffect(() => {
    fetch(`https://63069afec0d0f2b8011f9944.mockapi.io/produtos/${id}`)
      .then(resp => resp.json())
      .then(data => {
        setProduto(data)
      })
      .catch(error => console.error(error))
  }, [id])

  return (
    <section
      id="detalhes"
      className="h-[calc(100vh-50px)] p-0 grid place-items-center"
    >
      <Voltar />

      {produto ? (
        <div className="flex items-center justify-center gap-8 flex-wrap bg-black/30 p-5 shadow-md min-[430px]:rounded-2xl text-zinc-100">
          <img
            src={produto.imagem}
            className="w-[350px] h-[350px] rounded-xl"
            alt={"imagem do doce " + produto.nome}
          />

          <div className="max-[430px]:mb-24 flex flex-col max-[995px]:items-center">
            <h3 className="max-[750px]:text-center text-start">
              {produto.nome}
            </h3>

            <p className="max-w-xl max-[995px]:text-center min-[430px]:text-lg">
              {produto.descricao}
            </p>

            <div className="mt-4 max-[430px]:text-center">
              <span className="text-price-card font-semibold text-2xl max-[430px]:text-center">
                {produto.preco.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
              <sup className="text-zinc-300 ml-2">{produto.unidade}</sup>
            </div>

            <button className="bg-btn hover:bg-btn-hover transition-all p-4 text-xl font-semibold px-10 mt-3 rounded-md w-full max-w-[300px] uppercase tracking-wider">
              eu quero
            </button>
          </div>
        </div>
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
