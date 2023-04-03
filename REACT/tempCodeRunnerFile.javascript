const carro = {
  modelo: "Corolla",
  ano: 2020,
  lancamentos: [2000, 2001, 2004]
}

carro.lancamentos = [...carro.lancamentos, 2010]

console.log(carro)