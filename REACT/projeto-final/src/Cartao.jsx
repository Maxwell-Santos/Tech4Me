function Cartao(props){

  return(
    <div className="bg-card max-w-sm p-7 rounded-md">
      <h3 className="text-title-card text-2xl font-bold">{props.titulo}</h3>
      <p>{props.info}</p>
    </div>
  )
}

export default Cartao