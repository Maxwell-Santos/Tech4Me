const prompt = require("prompt-sync")()

let nome = ''
let nomes = []
do {
  nome = prompt("Qual o seu nome? ")
  nomes.push(nome)

} while(nome != '')

console.log(nomes)