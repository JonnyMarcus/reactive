function AddTasks() {
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <input
        type="text"
        placeholder="Digite o titulo da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md bg-white text-black"
      />
      <input
        type="text"
        placeholder="Digite o titulo da descrição"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md bg-white text-black"
      />
      <button className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium hover:bg-slate-600 hover:scale-105 transition-all duration-200 cursor-pointer">
        Adicionar
      </button>
    </div>
  );
}

export default AddTasks;
