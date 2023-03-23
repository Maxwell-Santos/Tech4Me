
const descricao = document.getElementById("description")
const titulo = document.getElementById("title")
const img_container = document.getElementById("img_container")

const img = document.createElement("img")

//classes do tailwind
img.classList.add("hover:scale-125", "transition-all", "ease", "duration-700", "max-[500px]:h-[300px]", "max-[500px]:aspect-square", "max-[500px]:rounded-lg")

img_container.appendChild(img)

const urlParams = window.location.search
const id_produto = urlParams.substring(urlParams.indexOf("=") + 1, urlParams.length)

async function pegarDoces() {
  const response = await fetch(`https://62d0e2051cc14f8c088fc83d.mockapi.io/produto/${id_produto}`)
  const data = await response.json()
  return await data
}

pegarDoces().then(doce => {
  img.src = doce.imagem
  titulo.innerText = doce.titulo
  descricao.innerText = doce.descricao
})