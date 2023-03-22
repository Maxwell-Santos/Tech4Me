const container = document.querySelector("#container")
const url = "https://8711-138-185-96-36.ngrok.io/carros"

function obterCarros(){
  fetch(url).then(res => res.json()).then(respCallback)
}

const lista = document.createElement("ul");
container.appendChild(lista);

function respCallback(listaCarros){
  listaCarros.forEach(preencher)
}

function preencher(carro){
  const item = document.createElement("li");
  lista.appendChild(item);

  item.innerHTML = carro.montadora + " " + carro.modelo;
}