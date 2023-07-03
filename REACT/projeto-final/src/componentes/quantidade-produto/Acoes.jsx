import IconeAdd from "./IconeAdd"
import IconeRemove from "./IconeRemove"

export function Adiciona({
  setQuantidade,
  quantidade,
  estoque,
}) {
  const handleClick = () => {
    setQuantidade(quantidadeAtual => quantidadeAtual + 1)
  }
  return (
    <button
      className="btn-quant-action"
      onClick={handleClick}
      disabled={quantidade === estoque}
      title="acrescentar mais um desse doce"
    >
      <IconeAdd />
    </button>
  )
}

export function Remove({ setQuantidade, quantidade }) {
  const handleClick = () => {
    setQuantidade(quantidadeAtual => quantidadeAtual - 1)
  }

  return (
    <button
      className="btn-quant-action"
      disabled={quantidade === 0}
      onClick={handleClick}
      title="diminuir um desse doce"

    >
      <IconeRemove />
    </button>
  )
}
