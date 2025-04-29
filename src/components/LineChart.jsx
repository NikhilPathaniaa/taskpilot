import React, { useEffect, useState } from "react";

const LineChart = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component mounted! 🚀");
  }, []);

  useEffect(() => {
    const handleResize = () => {
      console.log("Window resized");
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("Window event listener removed");
    };
  }, []);

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
