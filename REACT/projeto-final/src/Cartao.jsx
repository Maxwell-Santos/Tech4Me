function Cartao({doce}){

  return(
    <li className="flex-1 w-full max-w-[24rem] min-w-[300px] rounded-xl overflow-hidden group bg-card">
      <img src={doce.imagem} className="img-card" alt={`imagem do doce ${doce.titulo}`} />

      <div className="p-6 bg-card rounded-xl -translate-y-12 group-hover:-translate-y-2 h-full transition-all duration-300">
        <h3 className="text-title-card text-2xl font-bold">{doce.titulo}</h3>
        <p>{doce.info}</p>
      </div>
    </li>
  )
}

export default Cartao