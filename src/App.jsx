import React, { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [status, setStatus] = useState("low");

  const addTask = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;
    setTasks([...tasks, { text: task, status }]); // Store task and status together
    setTask(""); // Clear input after adding
    setStatus("low"); // Reset status
  };

  return (
    <div>
      <h1>Add task</h1>
      <form onSubmit={addTask}>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <input type="text" placeholder="Add task" value={task} onChange={(e) => setTask(e.target.value)} />
        <button type="submit">Add Task</button>
      </form>

      <h1>Task List</h1>
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            ({t.status}) {t.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
