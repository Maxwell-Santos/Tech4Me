const prompt = require("prompt-sync")()

let nome = ''
let nomes = []

do {
  nome = prompt("Qual o seu nome? ")
  if(!nome) break //para não add string vazia
  
  nomes.push(nome)

} while(nome != '')

console.log(nomes)

// === WHILE COMUM ===
nome = prompt("Qual o seu nome? ")

while(nome != "") {
  nomes.push(nome)
  nome = prompt("Qual o seu nome? ")

  if(!nome) break //para não add string vazia
}

console.log(nomes)