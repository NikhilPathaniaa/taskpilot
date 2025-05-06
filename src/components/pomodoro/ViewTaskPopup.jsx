import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import UpdateTaskPopup from "./UpdateTaskPopup";
import { FaPen } from "react-icons/fa6";

const ViewTaskPopup = (props) => {
  const [viewTask, setViewTask] = useState(false);
  console.log("view task",props.viewData)
  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white w-full max-w-md rounded-xl shadow-xl p-6">
       <div className="flex items-center justify-between"> <h2 className="text-xl font-semibold mb-4 text-gray-800">Task Detail</h2>
         <div className="flex">
         <button onClick={() => setViewTask(true)}><FaPen/></button>
        <button
        onClick={() => {props.handleDeleteTask(props.index); props.setShowTaskData(false)}}
        className="text-red-500 cursor-pointer text-2xl">
        <MdDelete />
      </button>
      </div>
      </div>
        {/* <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter task name" /> */}
        <div className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400">Task: {props.viewData}</div>
        <div className="flex justify-end gap-3">
          <button onClick={() => props.setShowTaskData(false)} className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 text-gray-800">
            Close
          </button>

        </div>
      </div>
    </div>
    {viewTask && <UpdateTaskPopup handleUpdateTask={props.handleUpdateTask} data={props.viewData} index={props.index} close={setViewTask}/>}
    </div>
  );
};

export default ViewTaskPopup;
