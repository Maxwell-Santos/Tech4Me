const prompt = require('prompt-sync')()

let estado = prompt("Qual a siga do estado que voê mora: ")

switch (estado) {
  case 'sp':
  case 'SP':
    console.log("Você mora em São Paulo")
    break;

  case 'es':
  case 'ES':
    console.log("Você mora no Espirito Santo")
    break;

  case 'rj':
  case 'RJ':
    console.log("Você mora no Rio de Janeiro")
    break;
    
  case 'mg':
  case 'MG':
    console.log("Você mora em Minas Gerais")
    break;

  default:
    console.log("Ou você não mora no sudeste, ou digitou a capital errada")
    break;
}