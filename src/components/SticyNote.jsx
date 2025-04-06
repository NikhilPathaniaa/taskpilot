import React, { useState } from "react";

const NoteLayout = () => {
  const [color, setColor] = useState("yellow");
  return (
    <div>
      <div className="flex items-center justify-between rounded-lg shadow-md mb-1 p-2">
        <select value={color} onChange={(e) => setColor(e.target.value)} className="border-2 border-blue-300 rounded-xl h-10">
          <option value="yellow" className="flex items-center justify-center">
            yellow
          </option>
          <option value="red">red</option>
          <option value="GreenYellow">green</option>
          <option value="MediumTurquoise" style={{ backgroundColor: "MediumTurquoise" }}>
            green
          </option>
        </select>
        <button className="text-4xl">🔻</button>
      </div>
      <div style={{ backgroundColor: color }}>
        <textarea className="w-full h-56 border-2 border-gray-300 rounded-lg p-4" placeholder="Write your note here..."></textarea>
      </div>
    </div>
  );
};
const SticyNote = () => {
  const [isVisible, setIsVisible] = useState(false);
  const HandleAddNote = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div>
      <div className="text-center text-xl font-mono bg-yellow-100 p-8 rounded-xl shadow-lg">
        <p>🗒️ This is the Sticky Note Tab!</p>
        <button onClick={HandleAddNote} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-200 ease-in-out">
          + Add Note
        </button>
      </div>
      {isVisible && (
        <div className="mt-4 flex flex-col items-center justify-center">
          <NoteLayout />
        </div>
      )}
    </div>
  );
};

export default SticyNote;
