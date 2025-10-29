import React from "react";

const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <span onClick={() => onToggle(task.id)}>{task.title}</span>
      <button onClick={() => onDelete(task.id)}>❌</button>
    </div>
  );
};

export default TaskItem;
