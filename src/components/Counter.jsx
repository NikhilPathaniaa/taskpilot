import React, { useEffect, useRef, useState } from "react";

const Counter = () => {
  const [joke, setJoke] = useState("");
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [isInside, setIsInside] = useState(false); // Track if mouse is inside
  const [note, setNote] = useState("");
  const editorRef = useRef(null);

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

  // Save notes
  useEffect(() => {
    const saved = localStorage.getItem("richNote");
    if (saved) editorRef.current.innerHTML = saved;
  }, []);

  const handleInput = () => {
    localStorage.setItem("richNote", editorRef.current.innerHTML);
  };

  const handleBold = () => {
    document.execCommand("bold", false, null);
  };

  const handleItalic = () => {
    document.execCommand("italic", false, null);
  };
  const handleFontSize = () => {
    document.execCommand("fontSize", false, 5);
  };
  const HandleUnderline = () => {
    document.execCommand("underline", false, null);
  };
  const HandleStrikeThrough = () => {
    document.execCommand("strikeThrough");
  };
  const HandleforeColor = () => {
    document.execCommand("foreColor", false, "#00000");
  };
  // ========================================
  return (
    <div className="relative  w-[100%] h-[100%] overflow-hidden" onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div id="joke" className="p-4">
        <h1 className="text-2xl font-bold mb-4">🤪Random Joke😆</h1>
        <p className="text-2xl font-mono">{joke}</p>
      </div>

      {(isInside || (!isInside && mouseX !== 0 && mouseY !== 0)) && (
        <div
          className="absolute h-60 w-60 rounded-full pointer-events-none 
               bg-[radial-gradient(circle,rgba(236,72,153,0.5)_0%,rgba(255,228,230,0.2)_100%)] 
               blur-2xl z-0 transition-all duration-75 ease-linear"
          style={{
            top: mouseY - 120,
            left: mouseX - 120,
          }}
        />
      )}
      <h2>
        🖱 Mouse Position: X: {mouseX}, Y: {mouseY}
      </h2>
      {/* Notes Editor */}
      <div className="w-full flex flex-col items-center justify-center px-4 py-7">
        <h1 className="text-2xl font-mono mb-4">📝 Notes</h1>

        {/* Toolbar */}
        <div className="p-1 space-x-2 w-full bg-white rounded-xl rounded-ee-none rounded-es-none border-b-2 border-gray-200 ">
          <button onClick={handleBold} className="px-4 py-2 cursor-pointer rounded-md hover:bg-gray-200 transition duration-200 ease-in-out">
            <p className="font-bold text-black">B</p>
          </button>
          <button onClick={handleItalic} className="px-4 py-2  cursor-pointer rounded-md hover:bg-gray-200 transition duration-200 ease-in-out">
            <p className=" italic text-black">I</p>
          </button>
          <button onClick={handleFontSize} className="px-4 py-2  cursor-pointer rounded-md hover:bg-gray-200 transition duration-200 ease-in-out">
            <p className=" text-black">h1</p>
          </button>
          <button onClick={HandleUnderline} className="px-4 py-2  cursor-pointer rounded-md hover:bg-gray-200 transition duration-200 ease-in-out">
            <p className=" underline text-black">U</p>
          </button>
          <button onClick={HandleStrikeThrough} className="px-4 py-2  cursor-pointer rounded-md hover:bg-gray-200 transition duration-200 ease-in-out">
            <p className=" line-through text-black">P</p>
          </button>
          <button onClick={HandleforeColor} className="px-4 py-2  cursor-pointer rounded-md hover:bg-gray-200 transition duration-200 ease-in-out">
            <p>🖤</p>
          </button>
        </div>

        {/* Rich Text Editor */}
        <div
          ref={editorRef}
          contentEditable
          onInput={handleInput}
          className="w-full h-[57vh] p-4 text-lg text-gray-800 bg-white rounded-ss-none rounded-se-none rounded-xl  focus:outline-none   shadow-md resize-none placeholder-gray-400"
          placeholder="Start typing your rich note..."
          suppressContentEditableWarning={true}
          overflow="auto"
          style={{ overflowY: "auto", maxHeight: "60vh" }}
        />
      </div>
    </div>
  );
};

export default Counter;
