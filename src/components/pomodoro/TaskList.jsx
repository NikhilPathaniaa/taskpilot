import React, { useEffect, useState } from "react";

const TaskList = (props) => {
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(25);
  const [timerStart, setTimerStart] = useState(true);
  useEffect(() => {
    if (!timerStart) {
      setTimeout(() => {
        if (minute == 0 && second == 0) {
          return;
        } else if (second === 0) {
          setMinute(minute - 1);
          setSecond(60);
        } else {
          setSecond(second - 1);
        }
      }, 1000);
      // return () => clearTimeout(timer);
    }
  }, [timerStart, second]);

  useEffect(() => {
    props.handleTime(props.index, second, minute);
  }, [second, minute]); // Only run when time updates

  const startTimeHandle = () => {
    setTimerStart(true);
  };
  const pauseTimeHandle = () => {
    setTimerStart(false);
  };
  const resetTimeHandle = () => {
    setSecond(0);
    setMinute(25);
  };
  console.log(props.viewData === undefined);

  return (
    <div>
      {props.viewData !== undefined && (
        <div className="text-center mb-1">
          Timer for task: {props.viewData} (at place {props.index + 1})
        </div>
      )}
      <div className="border-1 border-black rounded-2xl w-96 h-60 flex flex-col justify-between p-5">
        <div className="text-7xl font-semibold">
          {minute} : {second}
        </div>
        <div className="flex gap-5 items-end justify-center">
          <button className="cursor-pointer text-2xl border-1 border-black rounded-2xl p-2" onClick={startTimeHandle}>
            Pause
          </button>

          <button className="cursor-pointer text-2xl border-1 border-black rounded-2xl p-2" onClick={pauseTimeHandle}>
            Start
          </button>

          {timerStart ? (
            <button className="cursor-pointer text-2xl border-1 border-black rounded-2xl p-2" onClick={resetTimeHandle}>
              Reset
            </button>
          ) : (
            <button className="cursor-pointer text-2xl border-1 border-black rounded-2xl p-2">Reset</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(TaskList);
