const prompt = require('prompt-sync')()
const p1 = prompt("Primeiro valor: ")
const p2 = prompt("Segundo valor: ", '\n')

function multiplicar(primeiroValor, segundoValor){
  return console.log('O resultado da multiplicação é: ' + primeiroValor * segundoValor)
}

multiplicar(p1,p2)