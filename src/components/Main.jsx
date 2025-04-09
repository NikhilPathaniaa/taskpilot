import React, { useState } from "react";
import Counter from "./Counter";

const Main = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [status, setStatus] = useState("low");
  const checked = false;

  const addTask = (e) => {
    e.preventDefault();
    if (task.trim() === "") return; // bank input egnored
    setTasks([...tasks, { text: task, status, checked: false }]); // Store task and status together
    setTask(""); // Clear input after adding
    setStatus("low"); // Reset status
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].checked = !updatedTasks[index].checked;
    setTasks(updatedTasks);
  };

  const HandleRemoveTask = (index) => {
    const removeTask = [...tasks];
    removeTask.splice(index, 1); // Remove task at index
    setTasks(removeTask); // Update tasks state
  };
  return (
    <div className="bg-linear-30 from-blue-50 from-20% to-100% to-blue-200 flex  items-center justify-between p-5 h-screen w-screen">
      <Counter />
      <div className="h-[100%] flex flex-col items-start  gap-10 bg-white rounded-xl shadow-lg p-8">
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <img src="https://cdn-icons-png.flaticon.com/512/1040/1040214.png" alt="logo" className="h-10 w-10" />
            <p className="text-2xl font-medium font-mono">My Todo</p>
          </div>
          <form onSubmit={addTask} className="flex items-center gap-2">
            <select value={status} onChange={(e) => setStatus(e.target.value)} className="border-2 border-blue-300 rounded-xl h-10">
              <option value="low" className="flex items-center justify-center">
                Low
              </option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            <input type="text" className="border-2 border-blue-300 rounded-xl h-10 w-72" placeholder="Add task" value={task} onChange={(e) => setTask(e.target.value)} />
            <button type="submit" className="text-xl bg-gray-600 hover:bg-gray-800 text-gray-800 font-bold py-2 px-4 rounded-xl">
              Add
            </button>
          </form>
        </div>
        <ul>
          {tasks.map((t, index) => (
            <li key={index} className="flex items-center gap-2">
              <input type="checkbox" checked={t.checked} onChange={() => toggleTask(index)} />
              <label>
                <p className={`${t.checked ? "line-through text-gray-500" : t.status === "low" ? "text-green-500" : t.status === "medium" ? "text-orange-500" : "text-red-500"}`}>
                  ({t.status}) {t.text}
                </p>
              </label>
              <button onClick={HandleRemoveTask} className="text-red-500 hover:text-red-700 font-bold py-2 px-4 rounded-xl">
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Main;
