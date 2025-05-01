import { ArrowPathIcon, FunnelIcon, MinusIcon, PlusIcon, SwatchIcon } from "@heroicons/react/16/solid";
import React, { use, useState } from "react";

const PlayGround = () => {
  const [array, setArray] = useState([]);
  const [val, setVal] = useState(1);
  const [filterVal, setFilterVal] = useState("");
  const [indexVal, setIndexVal] = useState("");
  const [removeVal, setRemoveVal] = useState("");
  const [newArrayVal, setNewArrayVal] = useState("");
  const [newArrayDisable, setNewArrayDisable] = useState(true);

  const add = () => {
    setArray([...array, val]);
    setVal(val + 1);
  };
  const remove = () => {
    if (array.length !== 0) {
      const newArray = [...array]; // make a copy
      newArray.pop(); // safely mutate the copy
      setArray(newArray);
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
    setFilterVal("");
    setRemoveVal("");
    setNewArrayDisable(true);
  };
  const HandleFilter = () => {
    let flag = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] == filterVal) {
        setIndexVal(i);
        flag = true;
        break;
      }
    }
    if (!flag) {
      setIndexVal("Not present");
    }
  };
  const HandleFilterRemove = () => {
    const numToRemove = parseInt(removeVal, 10); // converting from string to number
    const updatedArray = array.filter((item) => item !== numToRemove);
    setArray(updatedArray);
    setRemoveVal("");
    if (numToRemove != array.length) {
      setVal(val - 1);
    }
    if (numToRemove == array.length) {
      setVal(val - 1);
    }
  };
  const HandleAddingNewArray = () => {
    setNewArrayDisable(false);
    const num = newArrayVal
      .split(",") // split by comma
      .map((num) => parseInt(num.trim())) // convert to number
      .filter((n) => !isNaN(n)); // remove any NaN

    setArray([...num]);
    setNewArrayVal("");
  };
  const BubbleSort = () => {
    let arr = [...array];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
    setArray([...arr]);
  };
  return (
    <div>
      <h1 className="text-center text-4xl font-bold">PlayGround</h1>
      <div className="flex flex-wrap items-center gap-4 mb-6">
        {newArrayDisable ? (
          <button onClick={add} className="cursor-pointer flex gap-2 items-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-xl transition duration-200">
            <PlusIcon className="h-5 w-5" /> Add
          </button>
        ) : (
          <button disabled className="cursor-pointer flex gap-2 items-center bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-xl transition duration-200">
            <PlusIcon className="h-5 w-5" /> Add
          </button>
        )}
        {newArrayDisable ? (
          <button onClick={remove} className="cursor-pointer flex gap-2 items-center bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-xl transition duration-200">
            <MinusIcon className="h-5 w-5" /> Remove
          </button>
        ) : (
          <button disabled className="cursor-pointer flex gap-2 items-center bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-xl transition duration-200">
            <MinusIcon className="h-5 w-5" /> Remove
          </button>
        )}
        <button onClick={reset} className="cursor-pointer flex gap-2 items-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-xl transition duration-200">
          <ArrowPathIcon className="h-5 w-5 group-hover:rotate-180 transition-transform duration-300" />
          Reset
        </button>
        <div className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-md">
          <input
            onChange={(e) => {
              setFilterVal(e.target.value);
            }}
            value={filterVal}
            type="number"
            placeholder="Enter value"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button onClick={HandleFilter} className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-xl transition duration-200">
            <FunnelIcon className="h-5 w-5" />
            Filter
          </button>
        </div>
        <div className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-md">
          <input
            onChange={(e) => {
              setRemoveVal(e.target.value);
            }}
            value={removeVal}
            type="number"
            placeholder="Enter value"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button onClick={HandleFilterRemove} className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-xl transition duration-200">
            <FunnelIcon className="h-5 w-5" />
            Filter Remove
          </button>
        </div>
        <div>
          <div className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-md">
            <input
              onChange={(e) => {
                setNewArrayVal(e.target.value);
              }}
              value={newArrayVal}
              type="text"
              placeholder="Enter value"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button onClick={HandleAddingNewArray} className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-xl transition duration-200">
              <FunnelIcon className="h-5 w-5" />
              Add Array
            </button>
          </div>

          <button onClick={BubbleSort} className="cursor-pointer mt-5 flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-xl transition duration-200">
            <SwatchIcon className="h-5 w-5" />
            Bubble Sort
          </button>
        </div>
      </div>

      <div className=" text-center text-lg">
        <p className="font-mono tracking-wider">[{array.join(", ")}]</p>
        {filterVal >= 1 && (
          <p>
            filter Value = {filterVal} <br /> filter Index = {indexVal}
          </p>
        )}
      </div>
    </div>
  );
};

export default PlayGround;
