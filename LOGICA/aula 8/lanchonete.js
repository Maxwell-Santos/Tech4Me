let prompt = require("prompt-sync")()

let lanche = prompt("Meu sanduíche: ")
let total = 0
let todosOsAcompanhamentos = []
let acompanhamento = ''

const concluir = "concluir"

console.log("você tem direito até cinco acompanhamentos")

do {
  acompanhamento = prompt('acompanhamento: ')
  todosOsAcompanhamentos.push(acompanhamento)
  total += 2

} while(acompanhamento != concluir || todosOsAcompanhamentos.length == 5)

console.log('Total dos acompanhamentos: ', total)

console.log(todosOsAcompanhamentos)