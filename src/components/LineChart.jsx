import React, { useEffect, useState } from "react";
import EmojiReactions from "./emoji/EmojiReactions";

const LineChart = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button className="bg-gray-500 h-10 w-10" onClick={(e) => setCount(count + 1)}>
        +
      </button>
      <div className="text-2xl text-black font-semibold">{count}</div>

      <h1 className="text-center text-2xl font-bold">Emoji Reaction Game</h1>

      <div>
        <EmojiReactions />
      </div>
    </div>
  );
};

export default LineChart;
