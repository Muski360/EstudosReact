import { useState } from "react";
import "./App.css";

function TaskSummary() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Estudar React", completed: true },
    { id: 2, title: "Criar projeto Vite", completed: true },
    { id: 3, title: "Beber 3L de água", completed: false },
  ]);

  const completedCount = tasks.filter((task) => task.completed).length;

  function toggleTask(taskId) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  }

  return (
    <section className="todo-card">
      <p className="summary">Concluídas: {completedCount}</p>

      <ul className="todo-list">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={task.completed ? "todo-item completed" : "todo-item pending"}
          >
            <span className="task-title">{task.title}</span>
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
    <main className="app-shell">
      <header className="app-header">
        <h1>To-Do Pro - Muski360</h1>
        <p>Organize suas tarefas em um só lugar.</p>
      </header>

      <TaskSummary />
    </main>
  );
}

export default App;