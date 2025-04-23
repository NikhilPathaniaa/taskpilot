import React, { useEffect, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa6";
import { RiResetRightFill } from "react-icons/ri";

const FocusTime = () => {
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [tab, setTab] = useState(0);
  const [timerStart, setTimerStart] = useState(true);
  console.log(timerStart);

  useEffect(() => {
    if (!timerStart) {
      setTimeout(() => {
        if (second == 59) {
          setSecond(0);
          setMinute(minute + 1);
        } else setSecond(second + 1);
      }, 100);
    }
  }, [timerStart, second]);

  const startTimeHandle = () => {
    setTimerStart(true);
  };
  const pauseTimeHandle = () => {
    setTimerStart(false);
  };
  const resetTimeHandle = () => {
    setSecond(0);
    setMinute(0);
  };

  return (
    <div>
      <div className="flex gap-10 ">
        <button className={`${tab === 0 ? "font-bold" : "font-normal"} cursor-pointer bg-red-500 text-white px-5 py-2 rounded-xl`} onClick={() => setTab(0)}>
          Focus Time
        </button>
        <button className={`${tab === 1 ? "font-bold" : "font-normal"} cursor-pointer bg-red-500 text-white px-5 py-2 rounded-xl`} onClick={() => setTab(1)}>
          Stop Watch
        </button>
      </div>
      {tab == 0 && (
        <div>
          <h1 className="text-4xl font-bold text-center mt-10">Focus Time</h1>
          <div className="flex justify-center items-center mt-5">
            <button className="cursor-pointer text-4xl" onClick={startTimeHandle}>
              <FaPause className="text-blue-400" />
            </button>

            <button className="cursor-pointer  text-4xl" onClick={pauseTimeHandle}>
              <FaPlay className="text-blue-400" />
            </button>

            {timerStart ? (
              <button className="cursor-pointer  text-4xl" onClick={resetTimeHandle}>
                <RiResetRightFill className="text-blue-400" />
              </button>
            ) : (
              <button className="cursor-pointer text-4xl">
                <RiResetRightFill className="text-gray-400" />
              </button>
            )}
          </div>
          <div className="mt-5 text-center">
            <p>Focus time will be displayed here...</p>
          </div>
          <div className="mt-5 text-center">
            <p>
              Timer: {minute}:{second}
            </p>
          </div>
        </div>
      )}
      {tab == 1 && <div></div>}
    </div>
  );
};

export default FocusTime;
