const prompt = require("prompt-sync")()

let cod = prompt("código: ")
let palavra = prompt("Palavra para criptografar: ")
let cripto = []
let descripto = []

let c = ''

for (let i = 0; i < palavra.length; i++) {
  cripto.push(palavra[i].charCodeAt() + parseInt(cod))
}

c = String.fromCharCode(...cripto)

console.log("palavra criptografada:", c) 

let descript = prompt("Descriptografar? s/n")

if(descript == 's') {
  for (let i = 0; i < c.length; i++) {
    descripto.push(c[i].charCodeAt() - parseInt(cod))
  }
  
  c = String.fromCharCode(...descripto)
  console.log("palavra descriptografada:", c) 
} 
