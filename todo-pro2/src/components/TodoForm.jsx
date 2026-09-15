//componente que vai gerenciar somente o formulário de envio da tarefa
//formulário para adicionar tarefas


import { useState } from "react"

const TodoForm = ({ addTask }) => {
    // Estado local para armazenamento temporario do texto digitado no campo de input
    const [task, setTask] = useState("");

    //Cria um manipulador de evento ao enviar o formulário
    const handleSubmit = (e) => {
        e.preventDefault();
        const cleanTask = task.trim(); // não recarrega a página ao enviar o formulário

        // validação do campo de entrada para verificar se o texto não é vazio
        if (cleanTask !== "") {
            addTask(cleanTask);
            setTask(""); //Reset o campo de entrada para o valor inicial
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="" id="" value={task} onChange={(e) => setTask(e.target.value)} />
            <button type="submit">Adicionar</button>
        </form>
    );
}

export default TodoForm;