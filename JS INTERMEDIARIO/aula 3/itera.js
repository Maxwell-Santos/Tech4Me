const carros = [ '🚗', '🚙', '🏎', '🚓']

for (let i = 0; i < carros.length; i++) {
  const carro = carros[i];
  console.log(carro) 
}

for (const carro of carros) {
  console.log('forof', carro)
}