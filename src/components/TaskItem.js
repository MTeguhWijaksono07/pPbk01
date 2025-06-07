import React from "react";

function TaskItem({ task, toggleCompletion, deleteTask }) {
  return (
    <div>
      <span
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
      >
        {task.task}
      </span>
      {task.completed ? (
        <button disabled>Sudah Selesai</button>
      ) : (
        <button onClick={() => toggleCompletion(task.id)}>Selesaikan</button>
      )}
      <button onClick={() => deleteTask(task.id)}>Hapus</button>
    </div>
  );
}

export default TaskItem;
