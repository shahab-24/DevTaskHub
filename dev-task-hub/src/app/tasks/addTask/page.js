"use client"; 
import { useState } from "react";
 // ✅ Correct import path
import TaskCard from "@/app/components/taskCard";

 // ✅ Import TaskCard if used

const AddTaskPage = () => {
        const [tasks, setTasks] = useState([
                {
                  "id": 1,
                  "title": "Design Homepage",
                  "description": "Create layout for homepage",
                  "category": "Frontend",
                  "completed": false
                },
                {
                  "id": 2,
                  "title": "API Integration",
                  "description": "Integrate payment gateway",
                  "category": "Backend",
                  "completed": true
                },
                {
                  "id": 3,
                  "title": "Database Setup",
                  "description": "Set up the database schema",
                  "category": "Database",
                  "completed": false
                },
                {
                  "id": 4,
                  "title": "User Authentication",
                  "description": "Implement user login and registration",
                  "category": "Backend",
                  "completed": false
                },
                {
                  "id": 5,
                  "title": "UI Testing",
                  "description": "Conduct UI tests and fix bugs",
                  "category": "Frontend",
                  "completed": false
                },
                {
                  "id": 6,
                  "title": "Deploy Application",
                  "description": "Deploy the application to a cloud server",
                  "category": "DevOps",
                  "completed": true
                },
                {
                  "id": 7,
                  "title": "Responsive Design",
                  "description": "Ensure the website is responsive",
                  "category": "Frontend",
                  "completed": true
                },
                {
                  "id": 8,
                  "title": "SEO Optimization",
                  "description": "Improve website SEO for better visibility",
                  "category": "Marketing",
                  "completed": false
                },
                {
                  "id": 9,
                  "title": "Bug Fixes",
                  "description": "Resolve known issues and bugs",
                  "category": "Maintenance",
                  "completed": false
                },
                {
                  "id": 10,
                  "title": "Documentation",
                  "description": "Write user and developer documentation",
                  "category": "General",
                  "completed": false
                }
              ]
              );

              const [draggedIndex, setDraggedIndex] = useState(null);

               // HTML5 Drag and Drop Handlers
  const handleDragStart = (index) => (event) => {
        setDraggedIndex(index);
        // Optionally, add a dataTransfer effect if needed
        event.dataTransfer.effectAllowed = 'move';
      };
    
      const handleDragOver = (index) => (event) => {
        event.preventDefault(); // Necessary to allow a drop
        event.dataTransfer.dropEffect = 'move';
      };
    
      const handleDrop = (index) => (event) => {
        event.preventDefault();
        if (draggedIndex === null) return;
        // Reorder tasks based on the dragged item
        const updatedTasks = [...tasks];
        const [draggedTask] = updatedTasks.splice(draggedIndex, 1);
        updatedTasks.splice(index, 0, draggedTask);
        setTasks(updatedTasks);
        setDraggedIndex(null);
      };
    

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

   const handleEdit = (taskId) => {
    console.log('Edit task', taskId);
    // Implement edit logic
  };

  const handleDelete = (taskId) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  const handleToggleComplete = (taskId) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-6">Your Tasks</h1>
          <div>
            {tasks.map((task, index) => (
              <div
                key={task.id}
                draggable
                onDragStart={handleDragStart(index)}
                onDragOver={handleDragOver(index)}
                onDrop={handleDrop(index)}
              >
                <TaskCard
                  task={task}
                  onEdit={() => handleEdit(task.id)}
                  onDelete={() => handleDelete(task.id)}
                  onToggleComplete={() => handleToggleComplete(task.id)}
                />
              </div>
            ))}
          </div>
        </div>
      );;
};

export default AddTaskPage;
