const alunos = []

var aluno = {
  nome: 'Alex',
  modulo: 'Lógica de programação',
  nota_4: 6.2,
  nota_6: 8.7,
  media: 0
}
alunos.push(aluno)

aluno = {
  nome: 'Leandro',
  modulo: 'Lógica de programação',
  nota_4: 5.3,
  nota_6: 5.9,
  media: 0
}
alunos.push(aluno)

aluno = {
  nome: 'Vinícius',
  modulo: 'Lógica de programação',
  nota_4: 2.9,
  nota_6: 7.5,
  media: 0
}
alunos.push(aluno)

aluno = {
  nome: 'Marcia',
  modulo: 'Lógica de programação',
  nota_4: 9.6,
  nota_6: 8.2,
  media: 0
}
alunos.push(aluno)

aluno = {
  nome: 'Thays',
  modulo: 'Lógica de programação',
  nota_4: 5.0,
  nota_6: 4.9,
  media: 0
}
alunos.push(aluno)

console.log("RELATÓRIO DAS NOTAS\n")

const relatorio = alunos.map(aluno => {
  console.log('NOME:', aluno.nome)
  console.log('NOTA 1:', aluno.nota_4,)
  console.log('NOTA 2:', aluno.nota_6, '\n')
})

const medias = []
const alunosAbaixoMedia = []

function mediasAlunos() {
  for (let i = 0; i < alunos.length; i++) {
    const aluno = alunos[i]
    const media = (aluno.nota_4 + aluno.nota_6) / 2
    aluno.media = media.toFixed(2)
    medias.push(aluno.media)
  }
}
mediasAlunos()

console.log("\n== A média mínima para passar é: 7.00 ==\n")

const ordenado = medias.sort()
const maiorMedia = ordenado[ordenado.length - 1]

alunos.forEach(aluno => {
  if (aluno.media == maiorMedia) {
    console.log("O Aluno com a maior média foi:", aluno.nome, "\nmédia:", aluno.media, '\n')
  }
  if (aluno.media < 7) {
    alunosAbaixoMedia.push(aluno)
  }
})

if (alunosAbaixoMedia.length != 0) {

  console.log("== ALUNOS ABAIXO DA MÉDIA ==")
  console.log(alunosAbaixoMedia.length, 'alunos estão abaixo da média 😕\n')

  alunosAbaixoMedia.forEach(aluno => {
    console.log('NOME:', aluno.nome)
    console.log('MÉDIA FINAL:', aluno.media, '\n')
  })

} else console.log("TODOS OS ALUNOS FORAM APROVADOS!")