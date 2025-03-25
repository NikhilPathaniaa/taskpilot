import React from "react";
import { useState } from "react";

const App = () => {
  const [addTask, setAddTask] = useState("");

  const task = (value) => {
    setAddTask(value);
  };
  return (
    <div>
      <h1>hi</h1>
      <h1>Add task</h1>
      <form onSubmit={task(value)}>
        <input type="text" placeholder="Add task" />
        <button>Add</button>
      </form>
      <h1>Task List</h1>
    </div>
  );
};

export default App;
