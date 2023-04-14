# Ciclo de Vida de um componente REACT

## O ciclo de vida, é o ciclo desde a montagem do componente até a renderização do mesmo.

- Primeiro ele renderiza vazio
- Depois monta o componente, geralmente é nessa parte que faz o fetch
-  renderiza de novo
- e a desmontagem do componente da DOM

## Gatilhos de Estado
- O que this.setState tem dois objetivos
  - armazenar valor
  - re-renderizar um componente quando mudar o estado
  - O novo valor armazenado fica armazenado na memória do React, mas só poderá ser acessado de fato, após a re-renderização do componente.

Na primeira renderização de um componente é chamado o método **componentDidMount()**, e ele só executa uma vez.

Após a primeira renderização, todas as atualizações no estado do componente, irá executar o método **componenteDidUpdate()**.

