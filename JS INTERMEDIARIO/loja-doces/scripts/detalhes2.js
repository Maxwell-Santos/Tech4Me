const container_pai = document.getElementById("container")

const url = "https://62d0e2051cc14f8c088fc83d.mockapi.io/produto"

async function pegarDoces() {
  const response = await fetch(url)
  const data = await response.json()

  return await data
}

class Card {
  constructor(titulo, descricao, imagem) {
    this.imagem = imagem
    this.descricao = descricao
    this.titulo = titulo
  }

  create() {
    const card = document.createElement("div")
    card.className = "card" //estilos tailwind

    card.innerHTML = `
      <img src="${this.imagem}" alt="">
      <div class="content">
        <h3 class="title-card">${this.titulo}</h3>
        <p>${this.descricao}</p>
      </div>
    `
    container_pai.appendChild(card)
  }
}

pegarDoces().then(data => {
  let meusDoces = data.filter(item => item.aluno == "maxwell")

  meusDoces.map(doce => {
    const CARD = new Card(doce.titulo, doce.descricao, doce.imagem)
    CARD.create()
  })
})
