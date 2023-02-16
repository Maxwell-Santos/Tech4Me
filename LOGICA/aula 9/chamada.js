const prompt = require("prompt-sync")()
const alunos = []
let nome = ''

do {
  nome = prompt("Qual o seu nome? ")
  alunos.push(nome)

}while(nome != '')


console.log(alunos)
