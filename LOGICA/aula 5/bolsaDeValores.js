
8,56

function ComprasNaBolsa(codigo, valorDaAcao, quantidade){
  const valorDaCompra = valorDaAcao * quantidade
  return {valorDaCompra, codigo, quantidade, valorDaAcao}
}

const compra1 = ComprasNaBolsa('ITSA4', 8.56, 8)
const compra2 = ComprasNaBolsa('ITSA4', 8.56, 8)
const compra3 = ComprasNaBolsa('ITSA4', 8.56, 8)

console.log("Você comprou da ação " + compra1.codigo + ", " + compra1.quantidade + " contratos no valor de, "+compra1.valorDaAcao+" \nPara finalizar, o valor cobrado para a compra foi de: " + compra1.valorDaCompra)

console.log("Você comprou da ação " + compra2.codigo + ", " + compra2.quantidade + " contratos no valor de, "+compra2.valorDaAcao+" \nPara finalizar, o valor cobrado para a compra foi de: " + compra2.valorDaCompra)

console.log("Você comprou da ação " + compra3.codigo + ", " + compra3.quantidade + " contratos no valor de, "+compra3.valorDaAcao+" \nPara finalizar, o valor cobrado para a compra foi de: " + compra3.valorDaCompra)