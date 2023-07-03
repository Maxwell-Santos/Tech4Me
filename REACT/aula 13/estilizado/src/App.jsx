/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react"

function App() {
  const caramelo = {background: "tomato"}

  const estilo = css`
    background-color: #a3a3a3;
    color: white;
  `

  return (
    <>
    <div css={estilo}>
      <p css={{color: "blue"}}>
        nova página estilizada
      </p>

      <span css={{fontSize: 30}}>
        Textão
      </span>

      <p css={[caramelo, {color: "#fff"}]}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit fugiat praesentium natus ex, cupiditate soluta. Quae ducimus id sapiente minima fuga aliquam, suscipit quam. Nostrum explicabo odio obcaecati vero vel.
      </p>

    </div>
    </>
  )
}

export default App
