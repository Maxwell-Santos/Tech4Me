/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react"

export default function Sobre() {
  const estiloPagSobre = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px auto;
    max-width: 900px;
    gap: 3rem;
    margin-top: 56px;

    & p {
      text-align: justify;
    }

    @media (min-width: 430px) {
      margin-bottom: 128px;
    }
  `

  const estiloTitulo = css`
    text-align: center;
  `

  const estiloPerfil = css`
    width: 20rem;
    border-radius: 50%;
    margin-inline: auto;
    margin-bottom: 20px;
  `

  const estiloVoltarBtn = css`
    position: fixed;
    left: 20px;
    top: 20px;
    padding: 8px;
    background-color: #fff;
    border-radius: 999px;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    &:hover {
      left: 16px;
    }
  `

  return (
    <section id="sobre" css={estiloPagSobre}>
      <a href="/vitrine" css={estiloVoltarBtn}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
          />
        </svg>
      </a>

      <h2 css={estiloTitulo}>Sobre o desenvolvedor desse site</h2>

      <div>
        <img
          src="https://media.licdn.com/dms/image/C4D03AQFXqXteInQ3fw/profile-displayphoto-shrink_800_800/0/1667858775434?e=1687392000&v=beta&t=aDfPIh1oF-cREb3jmEiNv2b4Wlj2sisFwAo3uzJQ3vo"
          alt="foto de perfil homem com cabelo enrolado e camisa branca"
          css={estiloPerfil}
        />

        <div>
          <p>
            Esse site tem quase a mesma aparência desde as avaliações de módulos anteriores. A ideia dele é ser uma loja de confeitaria, onde tem as informações dos doces que fazemos, ilustração, breve descrição e preço. Além disso, uma área de feedbacks, onde o cliente pode mandar sua opinião sobre sua experiência com a loja.
          </p>
          <br />
          <p>
            Venho de um curso de Desenvolvimento de Sistemas na ETEC aqui de Osasco, onde eu moro. Meu momento agora está sendo estudar e acumular aprendizados, para colocar em prática no futuro. O <strong>Projeto Galileo da Tech4me, junto da conexão ITAÚ e Alterdata</strong>, me proporcionou grandes aprendizados sobre o que usam no mercado, boas práticas com o código e como se manter atualizado.
          </p>
          <br />
          <p>
            Sou apaixonado por design e programação, é algo que se deixar eu fico um dia inteiro nisso. Mas não tem como saber de tudo, e o curso ensinou bastante sobre o desenvolvimento frontend, que eu gosto muito, como: levantar servidores simples locais, usar o terminal como prompt que explodiu minha cabeça, debugar o código, diferença de tipos de dados, manipular arrays e objetos, ciclo de vida de um componente React, estilização com o Bulma e Emotion, instalar bibliotecas e frameworks e muito, muito mais coisa que não cabe dizer aqui. São coisas que vamos levar para a vida toda. Inclusive, a professora Terezinha que sabia tanto o português, conseguiu ensinar muitos termos para pessoas que ela nem conhece, certeza que ela ficaria muito orgulhosa.
          </p>
          <br />
          <p>
            Esse é meu resumo de tudo que vivi, sou muito grato pelos professores e por essa
            oportunidade!
          </p>
        </div>
      </div>
    </section>
  )
}
