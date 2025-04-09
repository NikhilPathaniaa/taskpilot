import { ArrowPathIcon, FunnelIcon, MinusIcon, PlusIcon } from "@heroicons/react/16/solid";
import React, { use, useState } from "react";

const PlayGround = () => {
  const [array, setArray] = useState([]);
  const [val, setVal] = useState(1);
  const [filterVal, setFilterVal] = useState(0);

  const add = () => {
    setArray([...array, val]);
    setVal(val + 1);
    console.log(array);
  };
  const remove = () => {
    if (array.length !== 0) {
      const newArray = [...array]; // make a copy
      newArray.pop(); // safely mutate the copy
      setArray(newArray);
      console.log(newArray);
    }
    if (array.length === 0) {
      setVal(1);
    } else {
      setVal(val - 1);
    }
  };
  const reset = () => {
    setArray([]);
    setVal(1);
  };
  const HandleFilter = (value) => {
    for (let i = 0; i < array.length; i++) {
      if (filterVal == array[i]) {
        console.log(filterVal);
      }
      setFilterVal(filterVal + 1);
    }
  };
  return (
    <div>
      <h1 className="text-center text-4xl font-bold">PlayGround</h1>
      <div className="flex items-center gap-4 mb-6">
        <button onClick={add} className="cursor-pointer flex gap-2 items-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-xl transition duration-200">
          <PlusIcon className="h-5 w-5" /> Add
        </button>
        <button onClick={remove} className="cursor-pointer flex gap-2 items-center bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-xl transition duration-200">
          <MinusIcon className="h-5 w-5" /> Remove
        </button>
        <button onClick={reset} className="cursor-pointer flex gap-2 items-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-xl transition duration-200">
          <ArrowPathIcon className="h-5 w-5 group-hover:rotate-180 transition-transform duration-300" />
          Reset
        </button>
        <div className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-md">
          <input
            onChange={(e) => {
              e.target.value;
            }}
            type="number"
            placeholder="Enter value"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button onClick={HandleFilter(filterVal)} className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-xl transition duration-200">
            <FunnelIcon className="h-5 w-5" />
            Filter
          </button>
        </div>
      </div>

      <div className=" text-center text-lg">
        <p className="font-mono tracking-wider">[{array.join(", ")}]</p>
        <p>filter Value = {filterVal}</p>
      </div>
    </div>
  );
};

export default PlayGround;
