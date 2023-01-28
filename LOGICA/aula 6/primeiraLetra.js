const prompt = require("prompt-sync")()

console.log("Bem vindo ao nosso setor de RH")

let nome = prompt("Qual o seu nome? ")

function primeiraLetra(nome){
  const nomeEscolhido = nome.substring(0, 1)
  console.log(nomeEscolhido)
}

primeiraLetra(nome)