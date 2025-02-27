"use client"; 
import { useState } from "react";
import TaskForm from "../../components/TaskForm"; // ✅ Ensure correct path

const AddTaskPage = () => { // ✅ Capitalized component name
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (task) => {
    setTasks([...tasks, task]); // Append new task to state
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Add New Task</h1>
      <TaskForm onAddTask={handleAddTask} />
      <ul className="mt-6">
        {tasks.map((task, index) => (
          <li key={index} className="p-2 border-b">{task.title} - {task.priority}</li>
        ))}
      </ul>
    </div>
  );
};

export default AddTaskPage;
