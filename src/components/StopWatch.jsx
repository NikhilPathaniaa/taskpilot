import React, { useEffect, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa6";
import { RiResetRightFill } from "react-icons/ri";

const StopWatch = () => {
  const [minute, setMinute] = useState(5);
  const [second, setSecond] = useState(59);

  useEffect(() => {
    setTimeout(() => {
      if (minute > 0) {
        if (second == 0) {
          setMinute(minute - 1);
          setSecond(59);
        } else {
          setSecond(second - 1);
        }
      } else if (minute == 0) {
        if (second == 0) {
          setSecond(0);
        } else {
          setSecond(second - 1);
        }
      }
    }, 1000);
  }, [second]);

  return (
    <div>
      <button className="cursor-pointer  text-4xl">
        <FaPause className="text-blue-400" />
      </button>
      <button className="cursor-pointer  text-4xl">
        <FaPlay className="text-blue-400" />
      </button>
      <button className="cursor-pointer  text-4xl">
        <RiResetRightFill className="text-blue-400" />
      </button>
      Time : {minute}:{second}
    </div>
  );
};

export default StopWatch;
