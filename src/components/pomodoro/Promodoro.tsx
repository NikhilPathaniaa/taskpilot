import React, { useState } from "react";
import { FaCirclePlus, FaPen } from "react-icons/fa6";
import TaskList from "./TaskList";
import { MdDelete } from "react-icons/md";
import { HiDotsVertical } from "react-icons/hi";
import AddTaskPopup from "./AddTaskPopup";

const Promodoro = () => {
  const [taskList, setTaskList] = useState<String[]>([]);
  const [task, setTask] = useState("");
  const [showAdd, setShowAdd] = useState(false);

  const handleAddTask = () => {
    setShowAdd(true);
    if (task.length > 0 && task !== "  ") {
      const tempTask = task;
      setTaskList([...taskList, tempTask]);
      setTask("");
    }
  };

  const handleEditTask = (index: any) => {
    console.log(index);
  };
  const handleDeleteTask = (index: any) => {
    const removeTask = [...taskList];
    removeTask.splice(index, 1); // Remove task at index
    setTaskList(removeTask); // Update tasks state
  };
  const close = () => {
    setShowAdd(false);
  };
  return (
    <div>
      <button onClick={handleAddTask} className="flex font-bold text-gray-600 cursor-pointer gap-3 items-center justify-center bg-gray-100 border-2 border-gray-400 rounded-xl border-dashed h-14 w-[20vw]">
        <FaCirclePlus />
        Add Task
      </button>
      <div className="my-4">
        {taskList.map((item, index) => (
          <div key={index} className="flex items-center pl-3 justify-between border-1 border-gray-400 rounded-xl  h-8 w-[20vw]">
            {item}
            <div>
              <button onClick={() => handleEditTask(index)} className="text-gray-600 mr-2 cursor-pointer">
                <FaPen />
              </button>
              <button onClick={() => handleDeleteTask(index)} className="text-gray-600 cursor-pointer">
                <MdDelete />
              </button>
            </div>
          </div>
        ))}
      </div>
      {showAdd && <AddTaskPopup close={close} handleAddTask={handleAddTask} />}
      <TaskList handleAddTask={handleAddTask} />
    </div>
  );
};

export default Promodoro;
