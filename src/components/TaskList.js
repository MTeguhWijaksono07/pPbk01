import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, setTasks }) {
  const toggleCompletion = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleCompletion={toggleCompletion}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
