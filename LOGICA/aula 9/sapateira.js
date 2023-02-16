const prompt = require("prompt-sync")()

const sapatos = []

sapatos[1] = 'sapato1'
sapatos[2] = 'sapato2'
sapatos[3] = 'sapato3'
sapatos[4] = 'sapato4'
sapatos[5] = 'sapato5'

let resposta = prompt("Espaço de 1 a 5: ")
let achou = ''

switch(resposta) {
  case '1':
    achou = sapatos[1]
    break;
  case '2':
    achou = sapatos[2]
    break;
  case '3':
    achou = sapatos[3]
    break;
  case '4':
    achou = sapatos[4]
    break;
  case '5':
    achou = sapatos[5]
    break;
}

console.log(achou)

let pessoa = 'hello world'

for (let i = 0; i < pessoa.length; i++) {
  console.log(pessoa[i].charCodeAt())
  
}