import React, { useEffect, useState } from "react";

const NoteLayout = ({ id, note, onRemove, onUpdate }) => {
  const handleInput = (e) => {
    onUpdate(id, { ...note, text: e.target.value });
  };

  const handleColorChange = (e) => {
    onUpdate(id, { ...note, color: e.target.value });
  };
  return (
    <div>
      <div className="flex items-center justify-between rounded-lg shadow-md mb-1 p-2">
        <select value={note.color} onChange={handleColorChange} className="border-2 border-blue-300 rounded-xl h-10">
          <option value="yellow" className="flex items-center justify-center">
            yellow
          </option>
          <option value="red">red</option>
          <option value="GreenYellow">green</option>
          <option value="MediumTurquoise" style={{ backgroundColor: "MediumTurquoise" }}>
            MediumTurquoise
          </option>
        </select>
        <button className="text-4xl" onClick={() => onRemove(id)}>
          🔻
        </button>
      </div>
      <div style={{ backgroundColor: note.color }}>
        <textarea value={note.text} onChange={handleInput} className="w-full h-56 border-2 border-gray-300 rounded-lg p-4" placeholder="Write your note here..."></textarea>
      </div>
    </div>
  );
};
const SticyNote = () => {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("sticky-notes");
    return saved ? JSON.parse(saved) : [];
  });

  const handleAddNote = () => {
    const id = Date.now(); // unique id
    setNotes([...notes, { id, text: "", color: "yellow" }]);
  };

  const handleRemoveNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const handleUpdateNote = (id, updatedData) => {
    setNotes((prev) => prev.map((note) => (note.id === id ? { ...note, ...updatedData } : note)));
  };

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("sticky-notes"));
    if (savedNotes && Array.isArray(savedNotes)) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("sticky-notes", JSON.stringify(notes));
  }, [notes]);

  console.log("notes", notes);
  return (
    <div>
      <div className="text-center text-xl font-mono bg-yellow-100 p-8 rounded-xl shadow-lg">
        <p>🗒️ This is the Sticky Note Tab!</p>
        <button onClick={handleAddNote} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-200 ease-in-out">
          + Add Note
        </button>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
        {notes.map((note) => (
          <NoteLayout key={note.id} id={note.id} note={note} onRemove={handleRemoveNote} onUpdate={handleUpdateNote} />
        ))}
      </div>
    </div>
  );
};

export default SticyNote;
