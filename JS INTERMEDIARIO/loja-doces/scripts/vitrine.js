const input_email = document.getElementById("email")
const btn_enviar = document.querySelector("input[type='submit']")
const checkbox = document.getElementById("termos")

let resposta = ""
let email = ""

const label = document.createElement("label")
const pai = document.querySelector("body > section > form")

input_email.onchange = (event) => {
  email = event.target.value
}

btn_enviar.onclick = (event) => {
  event.preventDefault()

  if (!input_email.value && checkbox.checked) {
    resposta = prompt("Por favor, preencha o email")

    if (!resposta) {
      alert("Preenche logo ai") // msg de erro
      input_email.focus()

    } else {
      email = resposta
      input_email.value = email      
    }
  }

  if (checkbox.checked) validacaoEmail(email)
  else inserirMensagem(true) // esse true serve para mostrar o estilo 
}

function validacaoEmail(email_validacao) {

  const maiorQue10 = email_validacao.length >= 10
  const arroba = email_validacao.includes("@")
  const arrobaPosicao = email_validacao.indexOf("@")

  // essa variável existe, pois o email, pode conter pontos antes do @ ex: max.coding@gmail.com, e o includes procura o primeiro carácter que condiz com a validação. Então esse "dominio" procura ponto só após o arroba. (no domínio)
  const dominio = email_validacao.substring(arrobaPosicao, email_validacao.length) //recorte de tudo depois do arroba

  console.log(dominio)

  const incluiPonto = dominio.includes(".")

  if (maiorQue10 && arroba && incluiPonto) {
    inserirMensagem()

  } else {
    alert("Email inválido")
    input_email.focus()
  }
}

function inserirMensagem(status) {

  if (status) {
    label.style = "background-color: #ff5555; color: #fff; padding: 5px 10px; border-radius: 8px;"
    label.innerText = "Você precisa aceitar os termos de uso"

  } else {
    label.style = "background-color: #4cec5a; color: #fff; padding: 5px 10px; border-radius: 8px;"
    label.innerText = `Email "${email}" cadastrado com sucesso!`

    setTimeout(() => {
      label.style = "display: none;"

    }, 7 * 1000)
  }

  /**
   * recebe dois parâmetros:
   * 1: o elemento que você quer adicionar
   * 2: vai ser uma âncora no qual o elemento vai se basear para ser inserido à cima
   */
  pai.insertBefore(label, btn_enviar)

}