const prompt = require('prompt-sync')()

console.log("== Nome do cliente para ver o saldo ==\n")

const clientes = [
  'Tony Stark',
  'Bruce Wayne',
  'Joe',
  'Ellie',
  'Barry Allen',
  'Tio Patinhas',
  'Zepa',
  'Fisiquela',
  'Annie',
  'Walter Kovacs',
  'Charmosa',
  'Jose',
  'Neymar'
]

const saldos = [
  '3.00',
  '1000.00',
  '2469.00',
  '100.00',
  '10.00',
  '239,999.999.999',
  '20,000.00',
  '4359.56',
  '844,500.00',
  '73.00',
  '0.50',
  '-150.00',
  '0.00'
]

const nomeCliente = prompt("nome: ")

acharCliente(nomeCliente)

function acharCliente(nome){
  let achouCliente = false

  for (let i = 0; i < clientes.length; i++) {
    let cliente = clientes[i]
    
    //o nome está em uppercase para ignorar letras maiúsculas e minúsculas que o usuário digitar
    if (nome.toUpperCase() == cliente.toUpperCase()){
      let indexCliente = clientes.indexOf(cliente)
      let saldo = saldos[indexCliente]
      
      console.log(`\nCliente: ${cliente} \nSaldo na conta corrente: ${saldo}\n`)
      achouCliente = true
      break
    } 
  }
  if(!achouCliente) console.log(`cliente ${nomeCliente} não foi encontrado 🙄`)
}