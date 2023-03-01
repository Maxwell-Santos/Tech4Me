let prompt = require("prompt-sync")()

let lanche = prompt("Meu sanduíche: ")
let total = 0
let todosOsAcompanhamentos = []
let acompanhamento = ''

const concluir = "concluir"

console.log("\nVocê tem direito até 5 acompanhamentos, por R$ 2,00 cada\n")

for (let i = 0; i != 5; i++) {
  acompanhamento = prompt(`acompanhamento ${todosOsAcompanhamentos.length + 1}: ` )
  if(acompanhamento == concluir) break

  todosOsAcompanhamentos.push(acompanhamento)
  total += 2
  
}

console.log('\nSoma dos acompanhamentos: R$', total)
console.log('Lanche:', lanche, '\nAcompanhamentos:', todosOsAcompanhamentos)