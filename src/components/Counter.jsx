import React, { useEffect, useState } from "react";

const Counter = () => {
  const [joke, setJoke] = useState("");
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [isInside, setIsInside] = useState(false); // Track if mouse is inside
  const [note, setNote] = useState("");
  // Jokes
  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => res.json())
      .then((data) => setJoke(data.value));
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouseX(e.clientX - rect.left);
    setMouseY(e.clientY - rect.top);
  };

  const handleMouseEnter = () => {
    setIsInside(true);
  };

  const handleMouseLeave = () => {
    setIsInside(false); // Stop moving on leave
  };
  // ========================================
  // Load saved note when the page loads
  useEffect(() => {
    const savedNote = localStorage.getItem("note");
    if (savedNote) {
      setNote(savedNote);
    }
  }, []);

  // Save note whenever it changes
  useEffect(() => {
    localStorage.setItem("note", note);
  }, [note]);
  // ========================================
  return (
    <div className="relative  w-[100%] h-[100%] overflow-hidden " onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div id="joke" className="p-8">
        <h1 className="text-2xl font-bold mb-4">🤪Random Joke😆</h1>

        <p className="text-2xl font-mono">{joke}</p>
      </div>

      {(isInside || (!isInside && mouseX !== 0 && mouseY !== 0)) && (
        <div
          className="h-60 w-60 rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(236,72,153,0.5)_0%,rgba(255,228,230,0.2)_100%)] blur-2xl transition-all duration-75 ease-linear"
          style={{
            position: "absolute",
            top: mouseY - 120, // center the ball (half of 240px height)
            left: mouseX - 120, // center the ball (half of 240px width)
          }}
        />
      )}
      <h2>
        🖱 Mouse Position: X: {mouseX}, Y: {mouseY}
      </h2>
      <p>================================================================</p>
      <textarea value={note} onChange={(e) => setNote(e.target.value)} placeholder="Start typing..." />
    </div>
  );
};

export default Counter;
