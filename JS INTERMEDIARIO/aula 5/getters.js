class Carro {

  get modelo(){
    return this._modelo;
  }

  set modelo(param){
    this._modelo = param;
  }
  
}

const fusca = new Carro()

fusca.modelo = 'Fusca'

class Suv extends Carro {

  get esportivo(){
    this._esportivo;
  }

  set esportivo(param){
    this._exportivo = param
  }
}

let nivus = new Suv()

nivus.esportivo = true

console.log(nivus)

class Sedan extends Carro{
  constructor(){
    super() //serve para chamar o mesmo método, só que da classe superior, nesse caso carro
  }
}