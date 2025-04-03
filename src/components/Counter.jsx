import React, { useEffect, useState } from "react";

const Counter = () => {
  const [joke, setJoke] = useState("");
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [note, setNote] = useState("");
  // Jokes
  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => res.json())
      .then((data) => setJoke(data.value));
  }, []);

  // mouse position monitor
  useEffect(() => {
    const updateMousePosition = (e) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition); // Cleanup
    };
  }, []);

  useEffect(() => {
    console.log("Effect runs!");

    return () => {
      console.log("Cleanup runs!");
    };
  }, []);
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
    <div>
      <val>{joke}</val>
      <h2>
        🖱 Mouse Position: X: {mouseX}, Y: {mouseY}
      </h2>
      <p>================================================================</p>
      <textarea value={note} onChange={(e) => setNote(e.target.value)} placeholder="Start typing..." />
    </div>
  );
};

export default Counter;
