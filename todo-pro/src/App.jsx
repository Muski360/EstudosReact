import { useState } from "react";

function TaskSummary() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Estudar React", completed: true },
    { id: 2, title: "Criar projeto Vite", completed: true },
    { id: 3, title: "Beber 3L de água", completed: false },
  ]);

  const completedCount = tasks.filter((task) =>
    task.completed).length;

  function toggleTask(taskId) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  }

  return (
    <section>
      <p>Concluídas: {completedCount}</p>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span>{task.title}</span>
            <button type="button" onClick={() => toggleTask(task.id)}>
              {task.completed ? "Reabrir" : "Concluir"}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}



function App() {
  return (
    <main>
      <header>
        <h1>To-Do Pro - Muski360</h1>
        <p>Organize suas tarefas em um só lugar.</p>
      </header>

      <section>
        <h2>Minhas tarefas</h2>
        <p>Nenhuma tarefa foi adicionada.</p>
        <button type="button">Adicionar tarefa</button>
      </section>
    </main>
  )
}

export default App;