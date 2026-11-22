import { ChevronRightIcon, TrashIcon } from "lucide-react";

function Tasks({ tasks, onTasksClick, onDeleteTaskClick }) {
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((tasks) => (
        <li className="flex gap-2" key={tasks.id}>
          <button
            onClick={() => onTasksClick(tasks.id)}
            className={`w-full text-left bg-slate-400 text-white p-2 rounded-md ${
              tasks.isCompleted ? "line-through opacity-50" : ""
            }`}
          >
            {tasks.title}
          </button>
          <button className="bg-slate-400 text-white p-2 rounded-md ">
            <ChevronRightIcon />
          </button>
          <button
            onClick={() => onDeleteTaskClick(tasks.id)}
            className="bg-slate-400 text-white p-2 rounded-md "
          >
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
