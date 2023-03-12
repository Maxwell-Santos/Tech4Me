const prompt = require("prompt-sync")();
const alunos = [];
let nome = '';

console.log("Vamos começar a chamada!");
do {
  nome = prompt("Qual o seu nome? ");
  if(!nome) break; //não adicionar string vazia 
  alunos.push(nome);

}while(nome != '')

console.log(alunos);
