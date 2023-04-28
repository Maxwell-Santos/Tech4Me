import { Outlet } from "react-router-dom";

export default function Genero() {
  return (
    <>
      <h3>Filmes de Drama</h3>

      <ul>
        <li>Drama</li>
        <li>Comédia</li>
      </ul>

      {/* usado para mostrar a rota filha quando estiver la no caminho da url, pois nas rotas encadeadas a rota pai que nesse caso é generos, tem um elemento pai, daí o conteúdo do elemento filho será mostrado nesse Outlet */}
      <Outlet />
    </>
  )
}
