import React, { useState } from "react";
import { FaPen } from "react-icons/fa6";

const UpdateTaskPopup = (props) => {
  const [task, setTask] = useState(props.data);

  return <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
  <div className="bg-white w-full max-w-md rounded-xl shadow-xl p-6">
    <h2 className="text-xl font-semibold mb-4 text-gray-800">Update Task</h2>
    <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400" value={task} onChange={(e) => setTask(e.target.value)} />
    <div className="flex justify-end gap-3">
      <button onClick={() => props.close(false)} className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 text-gray-800">
        Cancel
      </button>
      <button
        onClick={() => {
          setTimeout(() => {
          props.handleUpdateTask(task, props.index)
          props.close(false)
          },2000)
        }}
        className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white">
        Save
      </button>
    </div>
  </div>
</div>
};

export default UpdateTaskPopup;
