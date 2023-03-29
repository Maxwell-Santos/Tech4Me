import "./App.css";

function App() {

  //tudo que pode atribuir em uma variável, pode ser usado na expressão que será mostrada no html

  return (
    <div className="App">
      <ElementosReactEmVars />
      <Calculadora />
      <ListaTopicos />
      <Estilo />
    </div>
  )
}

function ElementosReactEmVars() {

  const m1 = <strong>em negrito</strong>
  const m2 = <em>em itálico</em>

  //expressões só podem ser feitas com valores primitivos, porém null, false e true
  // ou seja, objeto não geram html
  const fusca = { modelo: "Fusca Itamar", ano: 1996, possuiAr: true }

  return (
    <div className="sessao">
      <div>
        <p>Renderização por conteúdo das variáveis {m1} e {m2}</p>
      </div>

      <div>
        <h2>Objetos não são renderizáveis</h2>
        <p>Apenas seus atributos</p>
        {fusca.modelo}
        {fusca.ano}
        <p>
          Possui Ar: {fusca.possuiAr ? "Sim" : "Não possui ar"}
        </p>
      </div>
    </div>
  )
}

function Calculadora() {
  const num1 = 4;
  const num2 = 7;

  return (
    <div className="sessao">
      <p>A soma de {num1} + {num2}</p>
      <p>É: {num1 + num2}</p>
    </div>
  )
}

function ListaTopicos() {
  const lista = []

  for (let i = 0; i < 10; i++) {
    lista.push(<li key={i}>{i + 1}</li>)
  }
  return (
    <div className="sessao">
      <h2>Iterando sobre lista </h2>
      <ul>
        {lista}
      </ul>
    </div>
  )
}

function Estilo() {
  const estilo = {
    width: "50px",
    height: "50px",
    backgroundColor: "#0f0",
    borderRadius: "10px"
  }

  return (
    <div className="sessao">
      <div style={estilo}></div>
    </div>
  )
}

export default App