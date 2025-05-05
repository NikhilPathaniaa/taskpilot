import React from "react";
import UpdateTaskPopup from "./UpdateTaskPopup";
import { MdDelete } from "react-icons/md";

const ViewTaskPopup = () => {
  return (
    <div>
      ViewTaskPopup
      <UpdateTaskPopup />
      <button
        //   onClick={() => handleDeleteTask(index)}
        className="text-gray-600 cursor-pointer">
        <MdDelete />
      </button>
    </div>
  );
};

export default ViewTaskPopup;
