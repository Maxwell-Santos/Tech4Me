const container = document.querySelector("body > main > section")

const div = document.createElement("div")

//como uso o tailwind, o estilo é feio por className
div.style = `
  position: absolute;
  top: 80px;
  color: #c9c9c9;
  font-weight: 600;
  font-size: 25px;
  text-align: center;
  background-color: #fff;
  max-width: 360px;
  width: 100%;
  padding: 10px 0px;
  border-radius: 10px;
  shadow-box: 2px 2px 5px rgba(0,0,0,0.1);
`

function cronometro() {
  const agora = new Date()

  const dif_horas = formatar(23 - agora.getHours())
  const dif_minutos = formatar(60 - agora.getMinutes())
  const dif_segundos = formatar(60 - agora.getSeconds())

  div.innerHTML = `
    <span class="block text-lg text-[#0e3996]">
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