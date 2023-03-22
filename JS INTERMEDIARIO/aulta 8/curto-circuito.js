// o curto circuito ou circuito curto, são os operadores && || e !

const fusca = {anoModelo: 1996}

// || - OU
/**
 * esse operador lógico, só é verdadeiro quando um dos lados for verdade, por exemplo se o fusca não tiver nenhum desses atributos, ele retorna ***undefined***, porque a variável ano existe, mas não foi setado nenhum valor pra ela
 * ambos atributos não existem no obj fusca
 */
let ano = fusca.ano || fusca.modelo
console.log(ano)
/**
 * Agora, se algum dos lados for verdade, vai atribuir nessa variável ano2, um ou o outro. 
 * Se os dois lados forem verdade, vai atribuir o primeiro valor que foi verdade
 */
let ano2 = fusca.anoModelo || fusca.modelo
console.log(ano2)

//&& - E
const pessoa = {nome: "max", idade: 19}

//saber se é uma pessoa
/**
 * Para saber se é uma pessoa, tem que ter esses dois atributos (nome e idade), essa expressão só é verdadeira, quando os dos lados são verdade apenas. Se um dos lados for falso, toda a expressão é falsa e retorna false.
 * Caso a expressão seja verdade, ela retorna o ultimo valor que foi verdade, é como se o lado esquerdo da expressão fosse uma âncora.
 * ex: se a pessoa tem nome, ok ja é meio caminho andando, agora se ela tbm tem idade, eu retorno a idade dela
 * 
 * Também é comum usarem para fazer renderização condicional 
 */
let e_pessoa = pessoa.nome && pessoa.idade

//saber se a pessoa é max
let e_o_max = pessoa.nome == "max" && pessoa.idade == 19

// exemplo de renderização condicional usando &&
//validação de formulário
// o objeto desse sistema, é mostrar o botão de login, apenas se o usuário preencher todos os inputs

var input_name = "max"
var input_email = "max@gmail.com"
var input_senha = "123"

/**
 * imagina que esses valores vieram do input la no html e agora preciso saber se todos têm algum valor
 */
const form = "<form></form>"
const btn_login = "<button>Login</button>"

const valida_form = input_name && input_email && input_senha && btn_login

form.innerHTML = valida_form

/**
 * O que aconteceu aqui é o seguinte: se todos o input tiverem algum valor, o valida_form vai receber o btn_login, todos que vieram antes dele, são âncoras para saber se o valida form vai receber o botão ou não
 * enquanto isso, o formulário vai mostrar no html o valida_form, e de novo, se todos os inputs tiverem preenchidos, vai receber o botão de login
 * 
 * Resumindo é isso, o botão de login não vai aparecer enquanto todos os input não estiverem preenchidos
 */

/* ! - NEGAÇÃO */
/**
 * Na negação ele nega um valor, por exemplo, converte ele para o seu contrário
 */

const existe_carro = !true

//Nessa variável, o existe carro ta recebendo o contrário de true, que é false, também da para usar para saber se alguma variável tem valor primário ou não
const nome = "stephanie"

if(!nome) console.log("Você precisa de um nome")
else console.log("Parabéns, você tem um nome bonito", nome)

// ou seja, se não existir valor dentro da variável nome, vai mostrar o primeiro console
//mas se existe valor dentro da variável nome, ele cai no segundo console