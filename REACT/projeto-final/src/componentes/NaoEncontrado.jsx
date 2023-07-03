import { Link } from "react-router-dom"

export default function NaoEncontrado() {
  return (
    <section className="min-h-[calc(100vh-80px)] text-center flex justify-center items-center flex-col">
      <h2>404</h2>
      <h2>página não encontrada</h2>
      <Link
        to="/vitrine"
        className="bg-btn hover:bg-btn-hover text-btn-text p-2 px-4 rounded-md transition-all"
        title="botão voltar para a vitrine"
      >
        voltar para a vitrine
      </Link>
    </section>
  )
}
