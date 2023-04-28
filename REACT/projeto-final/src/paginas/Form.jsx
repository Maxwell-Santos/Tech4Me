import { useState } from "react"
import { Voltar } from "../componentes/VoltarBtn"

export default function Form() {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [feedback, setFeedback] = useState("")

  const cadastrarLoja = data => {
    const url = "https://641cf247b556e431a878fb78.mockapi.io/produto?" //api ultima prova js 
    
    fetch("https://63069afec0d0f2b8011f9944.mockapi.io/produtos/loja-cadastro", {
      method : "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })

    console.log(data)
  }

  function handleSubmit(event) {
    event.preventDefault()
    cadastrarLoja({ nome, email, feedback })
  }

  return (
    <section id="form-cadastrar-loja">
      <Voltar />

      <form onSubmit={handleSubmit} className="form">
        <h2>Enviar Feedback</h2>

        <label htmlFor="nome">Nome</label>
        <div className="input-content">
          <input
            type="text"
            name="nome"
            id="nome"
            placeholder="ex: Maxwell"
            value={nome}
            onChange={event => setNome(event.target.value)}
            required
            title="campo de input do nome"
          />
          {nome && <ClearInput setValue={setNome} />}
        </div>

        <label htmlFor="email">Email</label>
        <div className="input-content">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="ex: ex@gmail.com"
            value={email}
            onChange={event => setEmail(event.target.value)}
            required
            title="campo de input do email"
          />
          {email && <ClearInput setValue={setEmail} />}
        </div>

        <label htmlFor="feedback">Feedback</label>
        <textarea
          name="feedback"
          id="feedback"
          placeholder="Deixe seu Feedback"
          className="h-40 resize-none"
          value={feedback}
          onChange={event => setFeedback(event.target.value)}
          required
          title="campo de input do feedback"
        ></textarea>

        <button type="submit" title="botão de enviar formulário">
          Enviar
        </button>
      </form>
    </section>
  )
}

function ClearInput({ setValue }) {
  return (
    <button type="button" onClick={() => setValue("")} className="text-zinc-400" title="Limpar o input">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path
          fillRule="evenodd"
          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  )
}
