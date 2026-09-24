# REACT - Guia Rápido e Anotações

**Unidade Curricular:** Desenvolvimento FrontEnd
**Conteúdo:** Desenvolvimento de Frameworks - React

## Semana 1 - Introdução ao React e Ambiente de Desenvolvimento

### 1. O que é React?

- Uma biblioteca JavaScript para criação de interfaces de usuário (UI)
- Funciona de forma **declarativa**: você descreve o resultado esperado com base nos dados, e o REACT atualiza o navegador.
- Cria *SPAs* (Single Page Applications) que carregam uma única página HTML e atualizam o conteúdo dinamicamente.

### 2. React vs JavaScript Vanilla: DOM Tradicional vs Virtual DOM

O DOM no JavaScript Tradicional é Imperativo: PRocura a tag, muda o componente e atualiza a página

React (Declarativo): UI=Componente(dados) -> Quando os dados mudam, o React atualiza o componente.

### 3. Comandos essenciais no terminal

```bash
#Criar projeto com o VITE(framework react)
npm create vite@latest nome-projeto --template react

#atualizar e instalar depêndencias do node_modules
npm install

# Iniciar o servidor local (http://localhost:5173)
npm run dev

```

### 4. Sintaxe do primeiro componente JSX(permite escrever códigos parecidos com HTML diretamente dentro do arquivo de script)

```jsx
//src/App.js
//Componente Raiz da Aplicação
function App(){
    const sistema = "Meu Site";

    return(
        <main>
            <h1>{sistema}</h1>
            <p>Gerencie seus componentes em um só lugar</p>
        </main>
    );
}

export default App;
```

> Obs: O JSX exibe **uma única tag raiz** (ou fragmento `<> ... </>`) e nomes de componentes sempre começam com a letra **Maiúscula** (UpperCamelCase).

---

## Semana 2 - JSX, Componentes, Props e Eventos

### 1. Responsabilidade Única (SOLID)
- Quebrar a tela em componentes pequenos. Cada componente deve fazer apenas uma unica coisa bem feita:

**Exemplo de componentes:**
- `Header`: cuida do título e do cabeçalho da aplicação
- `Footer`: cuida do rodapé da aplicação
- `NavBar`: cuida da barra de navegação do site

> obs: o principio do SOLID estabelece que uma unidade de software deve ter apenas um motivo para mudar

### 2. Props: passagem de dados e fluxo unidirecional

**O que são Props?

Os props são argumentos  ou parâmetros das funções já que um componenete REACT é uma função JavaScript, ou seja, as props (abreviação de properties) permitem que o componente pai envie dados dinâmicamente para o componente filho, tornando-o customizavel e retuilizável.

### 3. Eventos e Comunicação via Callbacks

React encapsulamento de enventos nativos em objetos, a diferença do react para o HTML é a sintaxe 
- no HTML: `onclick="minhafuncao()`
- no JSX: `onClick={minhaFuncao}`

> funções em javaScript devem seguir o padrão lowerCamelCase de escrita

```mermaid
flowchart LR
    A[Componente-Pai]
    B[Componente-Filho]
    A --(Passa dados via props)--> B
    B --(Dispara a ação via CallBack)-->A
```

### 4. Lista dinâmicas com map() e a propriedades `key`

**Porque arrays são estruturas padrão do FrontEnd?**

os dados chegam de banco de dados e APIs no formato de coleção (JSON)

o método `.map()` percorre cada item de uma array e retorna um novo componente JSX

Exemplo:

```jsx
tarefas.map((tarefa)=>(
    <TarefaItem
        key={tarefa.id}
        id={tarefa.id}
        titulo={tarefa.titulo}
        descricao={tarefa.descricao}
        completa={tarefa.completa}
    />
))
```

**Porque o React Exige o `key` no uso do `.map()`*

o React quando renderiza uma lista precisa saber de forma inequívoca qual item específico foi adicionado, alterado ou removido. Se a chave for omitida, o react emite um aviso no console: `Warning: Each child in a list should have a unique "key" prop.`

> evitar o índice do array como chave `(key={index})`: índice do vetor não é fixo, use sempre uma chave única para os item da lista ( carimbo de data e hora, id único, ) 

### Componentes de Formulário Estático:

Criando o Arquivo `TarefaForm.jsx`

---

## Semana 3 - Estado Formulário e CRUD em Memoria

**Tema:** transição de uma interface estática para uma aplicação reativa, trabalho com o hook fundamental: `useState`, construção de formulários com validação, CRUD completo, filtros e buscas textuais

**Contextualização:** Na semana 2, decomposição de tela monolítica em componentes reutilizáveis, organização de fluxo dos props e captura de eventos

### Bloco 1 - O conceito de Estado e o hook `useState`

**Variáveis Comum vs. Estado Reativo**

```js
// variável comum do JS
function Contador(){
    let contador = 0;

    function incremento(){
        contador += 1;
        console.log("Contador no console", contador); // exibe o número
    }

    return (
        <div>
            <p>Clique: {contador}</p>
            <button type="button" onClick={incremento}>Somar<button>
        </div>
    )
}
```

Obs:
* JavaScript convencionais perdem suas variáveis locais ao termino da execução
* O React não monitora variáveis comuns, ele não sabe que a variável mudou e, portanto, não tem motivo para redesenhar a tela
* O estado (state) é a memoria do componente. Quando o estado é modificado por uma função, o React agenda uma nova 

**A Sintaxe do `useState`**

ao invés do `let contador =0;`

Usa-se:

```jsx
const [contador, setContador] = useState(0);
```
Obs:
* `contador`: a foto do dado no momento da renderização atual;
* `setContador`: a função despachante que atualiza o dado e notifica o React;
* `useState(0)`: define o valor com o qual o componente nasce;

**Chamando a Mudança de Estado**

o próximo valor sempre depende do valor anterior 

```jsx
// Forma segura e profissional de realizar a mudança de estado 
setContador((prevContador) => prevContador + 1);
// atualização funcional do valor

//Outra forma - profissional
setContador(contador + 1);
```


> Fazendo a Mudança no Aplicativo de Lista de Tarefas
> React\lista-tarefas\src\App.jsx

### Bloco 2 - Elevação de Estado (Lifting State Up)

A Comunicação entre os componentes, Para que dois ou mais componentes no React compartilhem ou modifiquem dados, o estado dever ser elevado para o ancestral comum entre eles.

```mermaid
flowchart TB
    A[App.jsx - Ancestral Comum - O Estado Deve Estar Aqui]
    B[TarefaForm.jsx]
    C[TarefaList.jsx]
    D[TarefaItem.jsx]
    E[TarefaAction.jsx]

    A --> B
    A --> C
    C --> D
    D --> E

```
Obs:
1. O Estado `tarefas`reside no App.jsx
2. O App.jsx cria as funções de modificação (handleAddTarefa, handleMudarTarefa, handleDeletarTarefa);
3. Os dados descem como props para quem precisa usá-los
4. As funções descem como callbacks para quem precisa disparar a ação;

### Bloco 3 - Formulários Controlados e Validação

No HTML tradicional, os inputs guardam seu proprio texto internamente no DOM. No React, a unica fonte de aramazenamento deve ser o próprio React

Um input é controlado quando:
1. Seu atributo `value` está amarrado a um estado do React
2. Seu Evento `onChange` atualiza esse mesmo estado a cada caracter digitado

Exemplo de uso:
```jsx
<input
    type="text"
    value="titulo"
    onChange={(e) => setTitulo(e.target.value)}
/>
```

**Prevenindo o Recarregamento com `event.preventDefault()`**

evitar o comportamento nativo da web, que é submeter formulários de recarregar a página quando formulário ou eventos foram enviados. 

```jsx
function handleSubmit(e){
    e.preventDefault(); //impede o carregamento da página
    //pro
}
```

### Bloco 4 - Operações CRUD na Memória

**Imutabilidade no React**

Para que o React detecte uma alteração em um objeto ou array, devemos criar uma nova cópia com a alteração desejada.

Métodos como `.push()` `.unshift()` `pop()` não permitem modificar arrays no react, pois, o react compara o objeto na memoria e identifica que não teve mudança e conclui que não precisa fazer a renderização. a mudança só ocorre se form chamado o useState (mudança de estado)

**Operações de Imutabilidade no REACT**

* **Inserir**:

    `[novoItem, ...array]`
    // a mudança é feita criando um novo array com o novo item e espalhando os itens antigos

* **Remover**:

    `array.filter(item => item.id !== id)`
    // a mudança é feita criando um novo array filtrando os itens antigos e removendo o item desejado

* **Atualizar**:

    `array.map(item => item.id === id ? {...item, completed: true} : item)`
    // a mudança é feita criando um novo array mapeando os itens antigos e atualizando o item desejado
    

**Adicionando as 4 operações do CRUD no App.jsx**
React\lista-tarefas\src\App.jsx

---

### Bloco 5 - Filtros e Buscas

**Erro de criar estados duplicados**

Muitos programadores pensam em duplicar listas no React, porém, isso é um erro. Se você apaga uma tarefa em uma lista  deve lembrar de apagar na outra também, se esquecer de fazer isso os dados ficam desincronizados e podem gerar problemas no código.

Para resolver esse problemas, se um dado pode ser calculado a partir de um estado já existente, usse esse calculo ou essa lógica. **Não crie um novo estado para ele, ou seja, não duplique!!!**

**Vamos criar um componente par filtragem das tarefas em nossa aplicação 
```bash
type nul > components/TarefaFilter.jsx
```


