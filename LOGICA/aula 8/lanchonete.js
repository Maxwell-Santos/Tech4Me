let prompt = require("prompt-sync")()

let lanche = prompt("Meu sanduíche: ")
let total = 0
let todosOsAcompanhamentos = []
let acompanhamento = ''

const concluir = "concluir"

console.log("você tem direito até 5 acompanhamentos")

do {
  acompanhamento = prompt('acompanhamento: ')
  todosOsAcompanhamentos.push(acompanhamento)
  total += 2

  if(todosOsAcompanhamentos.length == 5) break

} while(acompanhamento != concluir)

console.log('Preço com os acompanhamentos: R$', total)

console.log('Lanche:', lanche, '\nAcompanhamentos:', todosOsAcompanhamentos)