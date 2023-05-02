export function formatarBRL(valor){
  const valorFormatado = valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
  
  return valorFormatado
}