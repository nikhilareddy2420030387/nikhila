import React, { useState, useEffect } from "react";
import api from "./api";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  // Fetch all tasks
  useEffect(() => {
    api.get("/tasks").then((res) => setTasks(res.data));
  }, []);

  // Add new task
  const addTask = async (title) => {
    const newTask = { title, completed: false };
    const res = await api.post("/tasks", newTask);
    setTasks([...tasks, res.data]);
  };

  // Toggle completion
  const toggleTask = async (id) => {
    const task = tasks.find((t) => t.id === id);
    const updated = { ...task, completed: !task.completed };
    await api.put(`/tasks/${id}`, updated);
    setTasks(tasks.map((t) => (t.id === id ? updated : t)));
  };

  // Delete task
  const deleteTask = async (id) => {
    await api.delete(`/tasks/${id}`);
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="app-container">
      <h1>📝 To-Do List</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
    </div>
  );
};

export default App;
