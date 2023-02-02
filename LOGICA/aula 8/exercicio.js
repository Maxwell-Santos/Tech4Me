//os primeiros 5 que ligarem, vão ganhar um ingresso para o cinema

const prompt = require("prompt-sync")()

for (let i = 0; i < 5; i++) {
  let nome = prompt("Alo, qual o seu nome? ")
  console.log(`Parabéns ${nome}, você ganhou um ingresso para o cinema!!`)
 
}

//contador de esconde-esconde la vou eu
for (let i = 20; i >= 3; i--) {
  console.log(i)
}

console.log("LA VOU EEUU!")