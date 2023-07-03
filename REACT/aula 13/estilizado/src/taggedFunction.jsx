export function Tagged(){
  
  const pegarNome = (aluno) => aluno

  //existe duas formas de chamar funções usando template string
  //ambas funções são equivalentes
  //taged function
  pegarNome`Maxwell`
  pegarNome("Maxwell")

  //essa função aceita no máximo 2 parâmetros o primeiro é um array e os demais são interpolações da string

  function filmes(primeiro, dois, tres){
    console.log(dois, tres)
    console.log("array", primeiro)
  }


  filmes`Eu assistir ${"Mário"} no dia ${10 + 12}`
  return(
    <span>sei la</span>
  )
}