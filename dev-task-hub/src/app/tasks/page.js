"use client";
import { useState } from "react";
import Link from "next/link";

const TasksPage = () => {
  const [tasks, setTasks] = useState([
    { title: "Learn Next.js", description: "Study App Router", priority: "High" },
    { title: "Build a Portfolio", description: "Create an amazing portfolio", priority: "Medium" },
    { title: "Apply for Jobs", description: "Send applications to companies", priority: "Low" },
  ]);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">All Tasks</h1>
        <Link
          href="/tasks/addTask"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          + Add Task
        </Link>
      </div>

      <ul className="mt-6 space-y-4">
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <li
              key={index}
              className="p-4 border rounded flex justify-between items-center"
            >
              <div>
                <h2 className="text-lg font-semibold">{task.title}</h2>
                <p className="text-gray-600">{task.description}</p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-white ${
                  task.priority === "High"
                    ? "bg-red-500"
                    : task.priority === "Medium"
                    ? "bg-yellow-500"
                    : "bg-green-500"
                }`}
              >
                {task.priority}
              </span>
            </li>
          ))
        ) : (
          <p className="text-gray-500 text-center">No tasks available. Add a new task!</p>
        )}
      </ul>
    </div>
  );
};

export default TasksPage;
