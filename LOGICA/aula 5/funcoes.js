const prompt = require("prompt-sync")()

var preco = prompt("Qual o preço do produto? ")

console.log("Valor cobrado pelo ambulante:", Math.round(preco))
