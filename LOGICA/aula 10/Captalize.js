const frase = 'vamos criar uma função para transformar a primeira letra de cada palavra da frase em maiúsculas.'

function capitalize(origem) {
  const palavras = origem.split(" ") //retorna um array

  let fraseCapitalizada = []
  
  for (let i = 0; i < palavras.length; i++) {
    let palavra = palavras[i]

    //recorta a primeira letra da palavra e coloca em uppercase, e concatena com a palavra menos a primeira letra dela antiga, por isso concatena a nova letra em maiúsculo
    let s = palavra.substring(0,1).toUpperCase() + palavra.substring(1)

    fraseCapitalizada.push(s)
  }

  return fraseCapitalizada.join(" ")
}

console.log(capitalize(frase))