"use client"; 
import { useState } from "react";
 // ✅ Correct import path
import TaskCard from "@/app/components/taskCard";
import TaskForm from "@/app/components/TaskForm";
 // ✅ Import TaskCard if used

const AddTaskPage = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Add New Task</h1>
      <TaskForm onAddTask={handleAddTask} />
      <ul className="mt-6">
        {tasks.map((task, index) => (
          <TaskCard key={index} task={task} /> // ✅ Display TaskCard component
        ))}
      </ul>
    </div>
  );
};

export default AddTaskPage;
