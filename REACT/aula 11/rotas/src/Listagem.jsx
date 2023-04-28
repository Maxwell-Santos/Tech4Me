import { Link } from 'react-router-dom'

export function Listagem(){
  const border = {border: "1px solid black", borderCollapse: "collapse", padding: '10px'}
  return (
    <>
    <Link to="/">Voltar</Link>
    
    <table style={border}>
      <tr style={border}>
        <td style={border}>Titulo</td>
        <td style={border}>Gênero</td>
        <td style={border}>Ano de Lançamento</td>
      </tr>
      <tr style={border}>
        <td style={border}>Mario</td>
        <td style={border}>Aventura</td>
        <td style={border}>2023</td>
      </tr>
    </table>
    </>
  )
}