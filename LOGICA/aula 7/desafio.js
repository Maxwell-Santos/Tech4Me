// escrever por extenso valor de de 20 a 99 - vale meio ponto
const prompt = require("prompt-sync")()

let valor = prompt("Digite um valor entre 20 e 99: ")

let casasDecimais = recortar(valor)

let valorExtenso = ''

pegarNumero(valor)

switch (casasDecimais.dezena) {

  case '2':
    valorExtenso = 'Vinte'
    break;

  case '3':
    valorExtenso = 'Trinta'
    break;

  case '4':
    valorExtenso = 'Quarenta'
    break;

  case '5':
    valorExtenso = 'Cinquenta'
    break;

  case '6':
    valorExtenso = 'Sessenta'
    break;

  case '7':
    valorExtenso = 'Setenta'
    break;

  case '8':
    valorExtenso = 'Oitenta'
    break;

  case '9':
    valorExtenso = 'Noventa'
    break;

  default:
    console.log("")
    break;
}

switch (casasDecimais.unidade) {

  case '1':
    valorExtenso += ' e um'
    break;

  case '2':
    valorExtenso += ' e dois'
    break;

  case '3':
    valorExtenso += ' e três'
    break;

  case '4':
    valorExtenso += ' e quatro'
    break;

  case '5':
    valorExtenso += ' e cinco'
    break;

  case '6':
    valorExtenso += ' e seis'
    break;

  case '7':
    valorExtenso += ' e sete'
    break;

  case '8':
    valorExtenso += ' e oito'
    break;

  case '9':
    valorExtenso += ' e nove'
    break;
}

console.log(valorExtenso)

function recortar(valor){
  let dezena = valor.slice(0, 1)
  let unidade = valor.slice(1, 2)

  return {dezena, unidade}
}

function pegarNumero(valor) {
  
  while (
    isNaN(parseInt(casasDecimais.dezena)) ||
    isNaN(parseInt(casasDecimais.unidade)) ||
    valor.length > 2 ||
    valor > 99 ||
    valor < 20
  ) {
    valor = prompt("Digite um valor entre 20 e 99: ")
    casasDecimais = recortar(valor)
  }
}