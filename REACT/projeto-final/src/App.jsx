import logoPng from "./assets/logo.png"
import { Link } from "react-router-dom"

function App() {
  return (
    <section
      id="inicial"
      className="min-h-[calc(100vh-50px)] flex justify-center sm:justify-evenly items-center flex-wrap"
    >
      <div>
        <img
          src={logoPng}
          alt="logo da loja Aqui doces"
          className="w-[400px] max-[500px]:max-w-[200px] drop-shadow-md"
        />
      </div>

      <div className="max-w-lg w-full">
        <h1>Bem vindo ao Aqui Doce</h1>
        <Link
          to="/vitrine"
          className="bg-btn block text-center p-4 rounded-lg text-lg uppercase font-bold text-white"
        >
          Vitrine
        </Link>
      </div>
    </section>
  )
}

export default App
