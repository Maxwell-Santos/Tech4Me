const resposta = document.getElementById("resposta");

resposta.innerHTML = "Pressione cadastrar";

const url = "https://3979-2804-56c-d7b6-9300-b5c6-5dd4-c7f5-b12f.ngrok.io/carros";

const config = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  }
}

const campoMontadora = document.getElementById("montadora");
const campoModelos = document.getElementById("modelo");

function cadastrar(){
  const montadora = campoMontadora.value;
  const modelo = campoModelos.value;

  const novo = {
    aluno: "max",
    montadora,
    modelo
  }

  config.body = JSON.stringify(novo)
  fetch(url, config)
  .then(resCB)
  .then(escrever)
}

function resCB(resp){
  return resp.json();
}

function escrever(dados){
  resposta.innerHTML = JSON.stringify(dados);
  recuperar(dados.id);
}

function recuperar(id){
  fetch(`${url}/${id}`)
}