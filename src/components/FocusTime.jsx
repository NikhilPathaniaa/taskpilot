import React from "react";

const FocusTime = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-10">Focus Time</h1>
      <div className="flex justify-center items-center mt-5">
        <input type="text" placeholder="Enter your focus time" className="border-2 border-gray-300 rounded-lg p-2 w-1/3" />
        <button className="bg-blue-500 text-white rounded-lg p-2 ml-2">Start</button>
      </div>
      <div className="mt-5 text-center">
        <p>Focus time will be displayed here...</p>
      </div>
      <div className="mt-5 text-center">
        <p>Timer: 00:00</p>
      </div>
    </div>
  );
};

export default FocusTime;
