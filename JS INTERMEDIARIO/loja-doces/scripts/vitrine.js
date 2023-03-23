const input_email = document.getElementById("email")
const btn_enviar = document.getElementById("btn_enviar")
const checkbox = document.getElementById("termos")
const container_checkbox = document.getElementById("container_checkbox")

let resposta = ""
let email = ""

const label = document.createElement("label")

input_email.onchange = (event) => {
  email = event.target.value
}

btn_enviar.onclick = () => {

  if (!input_email.value && !checkbox.checked) {
    resposta = prompt("Por favor, preencha o email")

    if (!resposta) {
      alert("Precisamos que coloque seu email, para você receber os melhores descontos 😄") // msg de erro
      input_email.focus()

    } else {
      validacaoEmail(email)
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

  let quant_arroba = 0

  for(letra of email_validacao){
    if(letra == '@') quant_arroba++
  }

  
  // essa variável existe, pois o email, pode conter pontos antes do @, ex: max.coding@gmail.com, e o includes procura o primeiro carácter que condiz com a validação. Então esse "domínio" procura ponto só após o arroba. (no domínio)
  const dominio = email_validacao.substring(arrobaPosicao, email_validacao.length) //recorte de tudo depois do arroba
  const incluiPonto = dominio.includes(".")
  
  if (maiorQue10 && arroba && incluiPonto) {
    
    if(quant_arroba > 1) {
      alert(`O email só pode conter 1 '@', esse email tem ${quant_arroba}`)
      input_email.focus()
    }

    else inserirMensagem()
  }
  else {
    alert("Email inválido")
    input_email.focus()
  }
}

function inserirMensagem(status) {

  if (status) {
    container_checkbox.style = "background: rgb(248,113,113, 0.7);color: #fff;"
    label.style = "color: #f00; font-size: 14px;"
    
    label.innerText = "Você precisa aceitar os termos de uso"

  } else {
    container_checkbox.style = "background: none; color: rgb(107 114 128);"
    label.style = "background-color: #4ec257; color: #fff; padding: 5px 10px; border-radius: 8px; font-size: 14px; text-align: center;"

    label.innerText = `Email "${email}" cadastrado com sucesso!`

    //sumir a mensagem depois de 7 segundos
    setTimeout(() => {
      label.style = "display: none;"
    }, 7 * 1000)
  }

  container_checkbox.append(label)
}

// ====== LISTAGEM DOS CARDS
const container_pai = document.getElementById("container")

const url = "https://62d0e2051cc14f8c088fc83d.mockapi.io/produto?aluno=maxwell"

class Card {
  constructor(titulo, descricao, imagem, id) {
    this.imagem = imagem
    this.descricao = descricao
    this.titulo = titulo
    this.id = id
  }

  create() {
    const card = document.createElement("div")
    card.className = "card" //estilos tailwind

    card.innerHTML = `
      <img src="${this.imagem}" alt="${this.titulo}">
      <div class="content">
        <h3 class="title-card">${this.titulo}</h3>
        <p>${this.descricao}</p>

        <a href="detalhes.html?id=${this.id}">Detalhes</a>
      </div>
    `
    container_pai.appendChild(card)
  }
}

async function pegarDoces() {
  const response = await fetch(url)
  const data = await response.json()

  return await data
}

pegarDoces().then(data => {
  data.map(doce => {
    const CARD = new Card(doce.titulo, doce.descricao, doce.imagem, doce.id)
    CARD.create()
  })
})