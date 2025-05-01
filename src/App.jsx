import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Main from "./components/Main";
import SticyNote from "./components/SticyNote";
import PlayGround from "./components/PlayGround";
import FocusTime from "./components/FocusTime";
import LineChart from "./components/LineChart";
const NavigationTabs = () => {
  const [space, setSpace] = useState(0);

  const calculateStorage = () => {
    let total = 0;
    for (let key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        total += (localStorage[key].length + key.length) * 2;
      }
    }
    return (total / 1024).toFixed(2); // in KB
  };

  useEffect(() => {
    const updateSpace = () => {
      setSpace(calculateStorage());
    };
    const interval = setInterval(updateSpace, 1000);
    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <div className="flex justify-center gap-4 bg-white shadow-md p-4">
      <NavLink to="/" end className={({ isActive }) => `text-lg font-medium ${isActive ? "text-blue-900 underline" : "text-blue-700 hover:underline"}`}>
        Counter
      </NavLink>
      <NavLink to="/sticky-note" className={({ isActive }) => `text-lg font-medium ${isActive ? "text-blue-900 underline" : "text-blue-700 hover:underline"}`}>
        Sticky Note
      </NavLink>
      <NavLink to="/playground" className={({ isActive }) => `text-lg font-medium ${isActive ? "text-blue-900 underline" : "text-blue-700 hover:underline"}`}>
        PlayGround
      </NavLink>
      <NavLink to="/focus-time" className={({ isActive }) => `text-lg font-medium ${isActive ? "text-blue-900 underline" : "text-blue-700 hover:underline"}`}>
        Focus Time
      </NavLink>
      <NavLink to="/line-chart" className={({ isActive }) => `text-lg font-medium ${isActive ? "text-blue-900 underline" : "text-blue-700 hover:underline"}`}>
        Line Chart
      </NavLink>
      <div className="absolute right-4 top-4 bg-gray-200 text-sm p-2 rounded-lg shadow-md">
        <p>LocalStorage Size: {space} KB</p>
      </div>
    </div>
  );
};
const App = () => {
  return (
    <BrowserRouter>
      <NavigationTabs />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sticky-note" element={<SticyNote />} />
        <Route path="/playground" element={<PlayGround />} />
        <Route path="/focus-time" element={<FocusTime />} />
        <Route path="/line-chart" element={<LineChart />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
