import React, { useState } from "react";
import Counter from "./components/Counter";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [status, setStatus] = useState("low");
  const [checked, setChecked] = useState(false);

  const addTask = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;
    setTasks([...tasks, { text: task, status }]); // Store task and status together
    setTask(""); // Clear input after adding
    setStatus("low"); // Reset status
  };

  const onChange = (e) => {
    setChecked(e.target.checked);
  };
  console.log("checked", checked);
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <h1>Add task</h1>
      <form onSubmit={addTask}>
        <select value={status} onChange={(e) => setStatus(e.target.value)} className="border-2 border-blue-300 rounded-xl h-10">
          <option value="low" className="flex items-center justify-center">
            Low
          </option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <input type="text" className="border-2 border-blue-300 rounded-xl h-10 w-72" placeholder="Add task" value={task} onChange={(e) => setTask(e.target.value)} />
        <button type="submit" className="bg-gray-300">
          Add Task
        </button>
      </form>

      <h1>Task List</h1>
      <ul>
        {tasks.map((t, index) => (
          <li key={index} className="flex items-center gap-2">
            <input type="checkbox" value={checked} onClick={onChange} />
            <label>
              {t.status == "low" ? (
                <p className={` ${checked ? "line-through text-gray-500" : "text-green-500"}`}>
                  ({t.status}) {t.text}
                </p>
              ) : t.status == "medium" ? (
                <p className={` ${checked ? "line-through text-gray-500" : "text-orange-500"}`}>
                  ({t.status}) {t.text}
                </p>
              ) : (
                <p className={` ${checked ? "line-through text-gray-500" : "text-red-500"}`}>
                  ({t.status}) {t.text}
                </p>
              )}
            </label>
          </li>
        ))}
      </ul>

      <Counter />
    </div>
  );
};

export default App;
