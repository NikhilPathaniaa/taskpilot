import React, { useCallback, useState } from "react";
import { FaCirclePlus, FaEye } from "react-icons/fa6";
import AddTaskPopup from "./AddTaskPopup";
import TaskList from "./TaskList";
import ViewTaskPopup from "./ViewTaskPopup";

const Promodoro = () => {
  const [taskList, setTaskList] = useState<String[]>([]);
  const [timeList, setTimeList] = useState<any[]>([{ minute: 0, second: 0 }]);

  const [showAdd, setShowAdd] = useState(false);
  const [showTaskData, setShowTaskData] = useState(false);
  const [index, setIndex] = useState(0);

  const handleAddTask = (newTask: String) => {
    if (newTask.length > 0 && newTask !== "  ") {
      setTaskList([...taskList, newTask]);
    }
    setShowAdd(false);
  };

  const handleTime = useCallback(
    (index: number, second: number, minute: number) => {
      console.log("second", second, "minute", minute);
      const newTime = { minute, second };
      const updatedList = timeList.map((task, i) => (i === index ? newTime : task));
      setTimeList(updatedList);
    },
    [timeList]
  );

  const handleViewTask = (index: any) => {
    setShowTaskData(true);
    setIndex(index);
    console.log(taskList[index]);
  };

  const handleUpdateTask = (newTask: String, index: any) => {
    console.log("trigger", newTask);
    if (newTask.trim().length > 0) {
      const updatedList = taskList.map((task, i) => (i === index ? newTask : task));
      setTaskList(updatedList);
    }
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
    <div className="flex items-center justify-around h-[80vh]">
      <div>
        <button onClick={() => setShowAdd(true)} className="flex font-bold text-gray-600 cursor-pointer gap-3 items-center justify-center bg-gray-100 border-2 border-gray-400 rounded-xl border-dashed h-14 w-[20vw]">
          <FaCirclePlus />
          Add Task
        </button>
        <div className="my-4">
          {taskList.map((item, index) => (
            <div key={index} onClick={() => setIndex(index)} className={` mb-2 flex items-center pl-3 justify-between border-1 border-gray-400 rounded-xl  h-8 w-[20vw]`}>
              {item}
              <div>
                <button onClick={() => handleViewTask(index)} className="text-gray-600 cursor-pointer pr-2">
                  <FaEye />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showAdd && <AddTaskPopup close={close} handleAddTask={handleAddTask} />}
      {showTaskData && <ViewTaskPopup handleUpdateTask={handleUpdateTask} index={index} handleDeleteTask={handleDeleteTask} viewData={taskList[index]} setShowTaskData={setShowTaskData} close={close} />}
      <TaskList index={index} viewData={taskList[index]} handleTime={handleTime} />
    </div>
  );
};

export default Promodoro;
