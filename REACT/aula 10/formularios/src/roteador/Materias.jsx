
export default function Escolher({cursoEscolhido}){

  switch(cursoEscolhido){
    case "hist": return <Historia />
    case "comp": return <Computacao />
  }
}

const Historia = () => {
  return(
    <span>história</span>
  )
}
const Computacao = () => {
  return(
    <span>Computação</span>
  )
}