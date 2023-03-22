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
