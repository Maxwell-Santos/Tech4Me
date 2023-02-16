const alunos = []

var aluno = {
  nome: 'Alex',
  modulo: 'Lógica de programação',
  nota_4: 6.2,
  nota_6: 4.7
}
alunos.push(aluno)

aluno = {
  nome: 'Maxwell',
  modulo: 'Lógica de programação',
  nota_4: 7.3,
  nota_6: 5.9
}
alunos.push(aluno) 

aluno = {
  nome: 'Vinícius',
  modulo: 'Lógica de programação',
  nota_4: 2.9,
  nota_6: 8.5
}
alunos.push(aluno) 

aluno = {
  nome: 'Marcia',
  modulo: 'Lógica de programação',
  nota_4: 4.6,
  nota_6: 2.2
}
alunos.push(aluno) 

aluno = {
  nome: 'Thays',
  modulo: 'Lógica de programação',
  nota_4: 8.0,
  nota_6: 4.9
}
alunos.push(aluno)

for (let i = 0; i < alunos.length; i++) {
  const aluno = alunos[i]
  const resultado = calculoNotas(aluno.nota_4, aluno.nota_6)
  
  console.log(`${aluno.nome} foi ${resultado} no módulo de ${aluno.modulo} \n`)
}

function calculoNotas(nota1, nota2){
  if((nota1 + nota2) / 2 > 5){
    return 'Aprovado!'

  } else return 'Reprovado!'
}