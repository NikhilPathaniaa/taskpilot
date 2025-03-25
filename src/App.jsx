import React from "react";
import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask(""); // Clear input after adding
  };

  return (
    <div>
      <h1>hi</h1>
      <h1>Add task</h1>
      <form>
        <select>
          <option>low</option>
          <option>medium</option>
          <option>high</option>
        </select>
        <input type="text" placeholder="Add task" value={task} onChange={(e) => setTask(e.target.value)} />
        <button onClick={addTask} className="mt-2 p-2 bg-blue-500 text-white rounded w-full">
          Add Task
        </button>
      </form>

      <h1>Task List</h1>
      <ul>
        {tasks.map((t, index) => (
          <li key={index} className="border p-2 rounded mb-1">
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
