const frutas = ["🍓", "🥥", "🥝", "🍉"]

//o rest pega tudo e agrupa
// ele usa ... do mesmo jeito que o rest, mas o js entende o que é pelo contexto, por exemplo, se for agrupar quaisquer quantidade de parâmetro dentro da função
//pode usar qualquer nome 
function feira(fruta1, fruta2, ...rest){
  console.log(fruta1, fruta2)
  console.log(rest)
}

feira(frutas[0], frutas[1], "qualquer", "coisa", {info: "que eu passar, vai ficar num array"})