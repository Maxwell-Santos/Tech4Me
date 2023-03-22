const url = "https://62d0e2051cc14f8c088fc83d.mockapi.io/produto"

const descricao = document.getElementById("description")
const titulo = document.getElementById("title")
const img_container = document.getElementById("img_container")

const img = document.createElement("img")

//classes do tailwind
img.classList.add("hover:scale-125", "transition-all", "ease", "duration-700", "max-[500px]:h-[300px]", "max-[500px]:aspect-square", "max-[500px]:rounded-lg")

img_container.appendChild(img)

async function pegarDoces() {
  const response = await fetch(url)
  const data = await response.json()

  return await data
}


const conatiner_doces = document.getElementById("container")

class Card {
  constructor(titulo, descricao, imagem) {
    this.imagem = imagem
    this.descricao = descricao
    this.titulo = titulo
  }
}

pegarDoces().then(data => {
  let meusDoces = data.filter(item => item.aluno == "maxwell")

  meusDoces.map(doce => {
    
    img.src = doce.imagem
    titulo.innerText = doce.titulo
    descricao.innerText = doce.descricao
    
  })
})