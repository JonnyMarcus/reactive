import { useState } from "react";
import Tasks from "./components/task";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "titulo da tarefa",
      description: "descrição da tarefa",
      isCompleted: false,
    },
    {
      id: 2,
      title: "titulo da tarefa",
      description: "descrição da tarefa",
      isCompleted: false,
    },
    {
      id: 3,
      title: "titulo da tarefa",
      description: "descrição da tarefa",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTask = tasks.filter((task) => task.id !== taskId);

    setTasks(newTask);
  }
  return (
    <div className="w-screen  h-screen  bg-slate-500 flex justify-center p-6 ">
      <div className="w-125 ">
        <h1 className="text-3xl text-slate-100 font-bold  text-center">
          Gerenciador de Tarefas
        </h1>

        <Tasks
          tasks={tasks}
          onTasksClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}
export default App;
