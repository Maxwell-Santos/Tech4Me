function App() {

  return (
    <div className="App">
      <Readme />
    </div>
  )
}

export default App


const Readme = () => {
  return (
    <>
      <h1>Componentes</h1>

      <p>Agrupa tudo que é necessário para que uma sessão do app funcione independentemente</p>
      <p>React separa js e css em conceitos, não em arquivos diferentes</p>

      <h2>Elementos X Componentes</h2>
      <p>Elementos é o html, vários elementos geram um componente</p>
      <p>Componente, concentra vários elementos que tenham uma mesma finalidade</p>
      <p>Módulo renderizável e reutilizado uma parte da interface do usuário</p>
    </>
  )
}