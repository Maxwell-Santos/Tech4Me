import { Link } from "react-router-dom"
import logo from "../assets/logo.png"

import "../styles/carregando.css"

export default function Cartao({ doce }) {
  // A api tem algum bug que a query não filtra totalmente só meus doces

  return (
    <>
      {doce.loja == "Aqui Doces" && (
        <li className="flex-1 w-full max-w-[24rem] min-w-[300px] overflow-hidden rounded-xl group">
          <img
            src={doce.imagem}
            className={`img-card ${doce.imagem && 'shimmer'} group-hover:scale-110 transition-all duration-300`}
            alt={`imagem do doce ${doce.nome}`}
          />

          <div className="p-6 bg-card/50 filter backdrop-blur-lg rounded-xl -translate-y-4 shadow-sm flex flex-col justify-between flex-1">
            <div>
              <header className="flex items-center justify-between">
                <h3 className="text-title-card text-2xl font-bold">
                  {doce.nome}
                </h3>
                <img src={logo} alt="logo da loja Aqui Doces" className="w-6"/>
              </header>

              <div className="flex items-center justify-between">
                <span className="text-price-card font-semibold text-xl block">
                  {doce.preco.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
                <small className="text-zinc-500">{doce.unidade}</small>
              </div>
            </div>

            <div className="mt-3">
              <Link
                to={`/detalhes/${doce.id}`}
                className="block text-center bg-btn hover:bg-btn-hover transition-all text-btn-text mt-3 p-3 rounded-lg font-semibold text-lg"
              >
                Ver mais
              </Link>
            </div>
          </div>
        </li>
      )}
    </>
  )
}
