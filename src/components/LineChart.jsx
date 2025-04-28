import React, { useEffect, useState } from "react";

const LineChart = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component mounted! 🚀");
  }, []);

  useEffect(() => {
    console.log("Count changed:", count);

    return () => {
      console.log("Component will UNMOUNT 💀");
    };
  }, [count]);

  return (
    <div>
      <button className="bg-gray-500 h-10 w-10" onClick={(e) => setCount(count + 1)}>
        +
      </button>
      <div className="text-2xl text-black font-semibold">{count}</div>
    </div>
  );
};

export default LineChart;
