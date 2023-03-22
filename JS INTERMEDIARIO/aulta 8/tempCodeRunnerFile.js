
var input_name = "max"
var input_email = "max@gmail.com"
var input_senha = "123"

/**
 * imagina que esses valores vieram do input la no html e agora preciso saber se todos têm algum valor
 */

const btn_login = "<button>Login</button>"

const valida_form = input_name && input_email && input_senha && btn_login
console.log(valida_form)