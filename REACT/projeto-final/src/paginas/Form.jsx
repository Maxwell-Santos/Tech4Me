import { useState } from "react"
import { Voltar } from "../componentes/VoltarBtn"

import IconeUsuario from "../componentes/form/IconeUsuario"
import IconeEmail from "../componentes/form/IconeEmail"
import IconeLimparInput from "../componentes/form/IconeLimparInput"
import IconeLimparForm from "../componentes/form/IconeLimparForm"
import IconeEnviar from "../componentes/form/IconeEnviar"

export default function Form() {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [feedback, setFeedback] = useState("")
  const [enviado, setEnviado] = useState(false)

  const cadastrarLoja = data => {
    const url = "https://641cf247b556e431a878fb78.mockapi.io/cadastrar" //api ultima prova js

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)

    }).then(data => {
      setEnviado(true)
      limparInputs(true)
    })

    console.log(data)
  }

  const handleSubmit = event => {
    event.preventDefault()
    cadastrarLoja({ nome, email, feedback })
  }

  const limparInputs = padraoForm => {
    if (!padraoForm) {
      const confimarLimpeza = confirm(
        "Deseja realmente limpar os campos? Essa ação não tem volta!"
      )

      if (confimarLimpeza) {
        setNome("")
        setEmail("")
        setFeedback("")
      }
      return
    }
    setNome("")
    setEmail("")
    setFeedback("")

    setTimeout(() => setEnviado(false), 3 * 1000)
  }

  return (
    <section id="form-cadastrar-loja">
      <Voltar />

      <form onSubmit={handleSubmit} className="form">
        <h2>Enviar Feedback</h2>

        <label htmlFor="nome">Nome</label>
        <div className="input-content">
          <IconeUsuario />
          <input
            type="text"
            name="nome"
            id="nome"
            placeholder="insira seu nome"
            value={nome}
            onChange={event => setNome(event.target.value)}
            required
            title="campo de input do nome"
          />
          {nome && <IconeLimparInput setValue={setNome} />}
        </div>

        <label htmlFor="email">Email</label>
        <div className="input-content">
          <IconeEmail />
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
          {email && <IconeLimparInput setValue={setEmail} />}
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

        <div className="action-btns">
          <button
            type="reset"
            title="limpar os campos do formulário"
            onClick={() => limparInputs()}
          >
            <IconeLimparForm />
            Limpar
          </button>
          <button
            type="submit"
            className="flex-1"
            title="botão de enviar formulário"
          >
            {!enviado ? 'Enviar' : 'Feedback enviado!'}
            <IconeEnviar enviar={enviado}/>
          </button>
        </div>
      </form>
    </section>
  )
}
