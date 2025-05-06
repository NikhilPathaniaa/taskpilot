import React, { useState } from "react";

const AddTaskPopup = (props: any) => {
  const [task, setTask] = useState("");
  console.log("add task")
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white w-full max-w-md rounded-xl shadow-xl p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Add Task</h2>
        <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter task name" value={task} onChange={(e) => setTask(e.target.value)} />
        <div className="flex justify-end gap-3">
          <button onClick={props.close} className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 text-gray-800">
            Cancel
          </button>
          <button
            onClick={() => {
              props.handleAddTask(task)
              setTask("")
            }}
            className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTaskPopup;
