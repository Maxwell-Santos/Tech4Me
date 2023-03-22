const container = document.querySelector(".container")

function cronometro() {
  const agora = new Date()

  const dif_horas = formatar(23 - agora.getHours())
  const dif_minutos = formatar(60 - agora.getMinutes())
  const dif_segundos = formatar(60 - agora.getSeconds())

  container.innerHTML = `As ofertas exclusivas terminam em: ${dif_horas}:${dif_minutos}:${dif_segundos}`
}

function formatar(numero) {
  let tempo = numero.toString()
  
  if(numero < 10) tempo = "0" + tempo

  return String(tempo)
}


setInterval(cronometro, 1 * 1000)

