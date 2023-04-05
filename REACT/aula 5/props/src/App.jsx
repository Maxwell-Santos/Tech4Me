import ComponenteClasse from './Classe'
import { Filme } from './Filme'

function App() {
  const sim = <span>disponível: sim 😍</span>
  const nao = <span>disponível: não 😪</span>

  const backend = [
    {
      titulo: "Homem nas trevas 2",
      genero: "Suspense"
    },
    {
      titulo: "Homem nas trevas 2",
      genero: "Suspense"
    },
    {
      titulo: "Homem nas trevas 2",
      genero: "Suspense"
    }
  ]

  backend.sort((a,b) => {
    let fa = a.titulo.toLocaleLowerCase()
    let fb = b.titulo.toLocaleLowerCase()

    if (fa < fb) return -1
    if (fa > fb) return 1

    return 0
  })

  const filmes = backend.map((item, index) => <Filme key={index}titulo={item.titulo} genero={item.genero}/>)
  return (
    <div>
      <h2>
        renderizados do map
      </h2>
      {filmes}
      
      <h2>Renderizados fixos</h2>
      <Filme titulo="Mad-Max" genero="Ação" disponivel={nao}/>
      <Filme titulo="Mistério em Paris" genero="comédia" disponivel={sim}/>
      <Filme titulo="Homem aranha 3" genero="Ação" disponivel={nao}/>

      <ComponenteClasse titulo="Nascimento do bitcoin" genero="lamentações"/>
    </div>
  )
}

export default App
