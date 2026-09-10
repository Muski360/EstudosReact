# Exercícios React

## Exercício 1 - DOM imperativo e React declarativo

* **Elementos no código imperativo:** Precisaria buscar manualmente os elementos na página (via `document.querySelector` ou `getElementById`) e alterar diretamente suas propriedades, como texto (`element.textContent`) ou classes (`element.classList`).
* **Dados no componente React:** Recebe apenas uma estrutura de dados simples via estado ou props, como `{ concluida: true }` ou `{ totalConcluidas: 1 }`.
* **Manutenibilidade:** A abordagem **declarativa (React)** é muito mais fácil de manter. Conforme a aplicação cresce, você só precisa focar em gerenciar os dados (estado). O React cuida de atualizar a tela automaticamente, evitando o caos de manipular o DOM na mão.
* **Árvore React vs. DOM Real:** A **árvore React** é uma estrutura conceitual em memória (Virtual DOM) que descreve como a interface *deveria* estar com base nos dados atuais. O **DOM real** (visível ao inspecionar o `<main>` no DevTools) são os nós HTML reais que o navegador cria para renderizar a tela.

---

## Exercício 2 - Identificando responsabilidades

1. **Exibir o título de uma tarefa:** Frontend
2. **Validar se uma tarefa possui título antes de salvá-la:** Backend *(pode haver uma pré-validação visual no Frontend para ajudar a interface, mas a regra de negócio final é do Backend)*
3. **Armazenar a data de criação de uma tarefa:** Banco de dados
4. **Alterar a cor de um botão ao passar o mouse:** Frontend
5. **Verificar se o usuário tem autorização para excluir uma tarefa:** Backend

---

## Exercício 4 - Exploração orientada

* **Arquivo com scripts do npm:** `package.json`
* **Por que `node_modules` não vai ao Git:** É uma pasta extremamente pesada que pode ser regerada a qualquer momento baixando os pacotes novamente com o comando `npm install`.
* **Local do código principal:** Pasta `src/`
* **Papel do `main.jsx`:** Ponto de entrada do JavaScript; ele inicializa o React e renderiza o componente raiz no DOM real.
* **Comando para versão de produção:** `npm run build`

