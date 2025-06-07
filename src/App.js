import React, { useState } from "react";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, task: "Belajar React", completed: false },
    { id: 2, task: "Membaca Buku", completed: false },
  ]);
  
  const [newTask, setNewTask] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    const newTaskObj = {
      id: tasks.length + 1,
      task: newTask,
      completed: false,
    };
    setTasks([...tasks, newTaskObj]);
    setNewTask("");
  };

  return (
    <div>
      <h1>Aplikasi Pengelolaan Tugas</h1>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="submit">Tambah Tugas</button>
      </form>
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
