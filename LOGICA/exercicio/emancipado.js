var idade = 20
var sex = 'f'
const emancipacao_m = 18
const emancipacao_f = 21

var sou_emancipado_m = idade >= emancipacao_m && sex == 'm' 
var sou_emancipado_f = idade >= emancipacao_f && sex == 'f'

var sou_emancipado = sou_emancipado_m || sou_emancipado_f

// sou emancipado se for maior de 18 anos e do sexo masculino 
// sou emancipado se for maior de 21 anos e do sexo feminino 

console.log("Você é emancipado?", sou_emancipado)