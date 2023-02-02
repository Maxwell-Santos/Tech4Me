let prompt = require("prompt-sync")()

let lanche = prompt("Meu sanduíche: ")
let total = 0
let pedidoCompleto = ''
const concluir = "concluir"
let acompanhamento = ''

console.log("você tem direito até cinco acompanhamentos")

for (let i = 0; i < 5; i++) {

  do {
    acompanhamento = prompt(`acompanhamento ${i + 1}: `)  
    total += 2

  } while(acompanhamento == concluir)
}

console.log(total)
console.log(acompanhamento)