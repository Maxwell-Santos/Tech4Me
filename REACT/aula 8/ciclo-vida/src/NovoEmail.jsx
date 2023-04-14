import React from 'react'

class NovoEmail extends React.Component {

  constructor(props){
    super(props)
  }
  
  componentDidMount() {
    //fazer isso depois que o documento foi montado
    document.title = "Novo Titulo"
  }

  render(){
    return(
      <div>
        alguma coisa

        <hr />
      </div>
    )
  }
}

export default NovoEmail