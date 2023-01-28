
8,56

function ComprasNaBolsa(codigo, valorDaAcao, quantidade){
  const valorDaCompra = valorDaAcao * quantidade
  return {valorDaCompra, codigo, quantidade, valorDaAcao}
}

const compra1 = ComprasNaBolsa('ITSA4', 8.56, 8)

console.log("Você comprou da ação " + compra1.codigo + ", " + compra1.quantidade + " contratos no valor de, "+compra1.valorDaAcao+" \nPara finalizar, o valor cobrado para a compra foi de: " + compra1.valorDaCompra)