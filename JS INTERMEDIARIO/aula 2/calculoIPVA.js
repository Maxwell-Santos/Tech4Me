const prompt = require("prompt-sync")()

var valorCarro = prompt("Valor atual do carro: ")

const calculoIPVA = valor => valor * 0.04

var carroComIPVA = calculoIPVA(valorCarro)

console.log("seu carro de " + valorCarro + " ta com o IPVA de: " + carroComIPVA)