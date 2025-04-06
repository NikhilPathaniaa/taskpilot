import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Main from "./components/Main";
import SticyNote from "./components/SticyNote";
const NavigationTabs = () => {
  return (
    <div className="flex justify-center gap-4 bg-white shadow-md p-4">
      <NavLink to="/" end className={({ isActive }) => `text-lg font-medium ${isActive ? "text-blue-900 underline" : "text-blue-700 hover:underline"}`}>
        Counter
      </NavLink>
      <NavLink to="/sticky-note" className={({ isActive }) => `text-lg font-medium ${isActive ? "text-blue-900 underline" : "text-blue-700 hover:underline"}`}>
        Sticky Note
      </NavLink>
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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
