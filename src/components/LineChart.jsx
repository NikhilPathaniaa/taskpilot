import React, { useEffect, useState } from "react";
import EmojiReactions from "./emoji/EmojiReactions";

const LineChart = () => {
  const [count, setCount] = useState(0);

  const reset = (num) => {
    setCount(num)
  }
  return (
    <div>
      <button className="bg-gray-500 h-10 w-10" onClick={(e) => setCount(count + 1)}>
        +
      </button>
      <div className="text-2xl text-black font-semibold">{count}</div>
      <button onClick={() => reset(1)} className="cursor-pointer text-2xl">Reset</button>
      <h1 className="text-center text-2xl font-bold">Emoji Reaction Game</h1>
     
      <div>
        <EmojiReactions reset={reset}/>
      </div>
    </div>
  );
};

export default LineChart;
