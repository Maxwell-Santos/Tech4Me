const prompt = require("prompt-sync")()

const sapatos = ['sapato-alto', 'rasteirinha', 'chinelo', 'sandália']

let nomeSapato = prompt("Qual tipo de sapato você procura? ")

for (let i = 0; i < sapatos.length; i++) {
  if(nomeSapato == sapatos[i]) {
    console.log(sapatos[i])
    console.log(sapatos.indexOf(sapatos[i], 0))
    break
  }
}