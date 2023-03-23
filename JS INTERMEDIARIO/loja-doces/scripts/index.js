const container = document.getElementById("intro")

const div = document.createElement("div")

div.style = `
  position: absolute;
  top: 80px;
  color: #fff;
  font-weight: 600;
  font-size: 32px;
  text-align: center;
  background-color: #ffb95a;
  max-width: 400px;
  width: 100%;
  padding: 10px 0px;
  border-radius: 4px;
  filter: drop-shadow(2px 2px 1px rgba(0,0,0,0.1));
`

function cronometro() {
  const agora = new Date()

  const dif_horas = formatar(23 - agora.getHours())
  const dif_minutos = formatar(59 - agora.getMinutes())
  const dif_segundos = formatar(60 - agora.getSeconds())

  div.innerHTML = `
    <span class="block text-lg">
      Ofertas válidas por:
    </span>
    ${dif_horas}:${dif_minutos}:${dif_segundos}
  `
}

function formatar(numero) {
  let tempo = numero.toString()

  if (numero < 10) tempo = "0" + tempo

  return String(tempo)
}

container.appendChild(div)

setInterval(cronometro, 1 * 1000)