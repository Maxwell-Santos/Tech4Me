export default function Sobre() {
  const estiloPagSobre = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "0px auto",
    maxWidth: "900px",
    gap: "3rem"
  }
  const estiloTitulo = {
    textAlign: "center",
  }

  const estiloPerfil = {
    width: "25rem",
    borderRadius: "50%"
  }

  return (
    <section id="sobre" className="mt-14 max-[430px]:mb-32">

      <a href="/vitrine" className="fixed left-5 top-5 p-2 bg-white rounded-full hover:-translate-x-1 transition-all">
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

      <h2 style={estiloTitulo}>Sobre o desenvolvedor desse site</h2>

      <div style={estiloPagSobre}>
        <img
          src="https://media.licdn.com/dms/image/C4D03AQFXqXteInQ3fw/profile-displayphoto-shrink_800_800/0/1667858775434?e=1687392000&v=beta&t=aDfPIh1oF-cREb3jmEiNv2b4Wlj2sisFwAo3uzJQ3vo"
          alt="foto de perfil homem com cabelo enrolado e camisa branca"
          style={estiloPerfil}
        />

        <div>
          <p>
            Esse site tem quase a mesma aparência desde as avaliações de módulos
            anteriores. A ideia dele é ser uma loja de confeitaria, onde tem as
            informações dos doces que fazemos, ilustração, breve descrição e
            preço. Além disso, uma área de feedbacks, onde o cliente pode mandar
            sua opinião sobre sua experiência com a loja.
          </p>
          <br />
          <p>
            Eu venho de um curso de Desenvolvimento de Sistemas na ETEC aqui de
            Osasco, onde eu moro. Meu momento agora está sendo estudar e
            acumular aprendizados, para colocar em prática na vida profissional
            e prática. O <strong>Projeto Galileo da Tech4me, junto da conexão ITAÚ</strong>, me
            proporcionou grandes aprendizados sobre o que usam no mercado, boas
            práticas com o código e como se manter atualizado.
          </p>
          <br />
          <p>
            Eu gosto de estudar sobre programação, e é algo que se deixar eu
            fico um dia inteiro nisso. Mas não tem como saber de tudo, e o curso
            ensinou bastante coisa sobre o desenvolvimento frontend, que eu
            gosto muito, como: levantar servidores simples locais, usar o
            terminal como prompt que explodiu minha cabeça, testar o código,
            debugar o código, diferença de tipos de dados, manipular arrays e
            objetos, ciclo de vida de um componente React, estilização com o
            Bulma etc. Foi muito aprendizado mesmo que não tem condições de
            listar tudo, e são coisas que vamos levar para a vida toda.
            Inclusive, a professora Terezinha que sabia tanto de português, que
            ensinou muitos termos para pessoas que ela nem conhece.
          </p>
          <br />
          <p>
            Esse é meu resumo de tudo que vivi e sou muito grato pela
            oportunidade.
          </p>
        </div>
      </div>
    </section>
  )
}
