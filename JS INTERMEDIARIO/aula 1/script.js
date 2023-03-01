const listaContent = document.querySelector(".lista-ordenada")

function adicionar(){
  const item = document.createElement('li')
  item.setAttribute('class','sapato')

  item.innerText = 'sapato'
  listaContent.appendChild(item)
}