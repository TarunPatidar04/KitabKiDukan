import React from "react";
import Home from "./home/Home";
import { Routes, Route } from "react-router-dom";
import Courses from "./course/Courses";
import Signup from "./components/Signup";
import Contacts from "./contact/Contacts";

const App = () => {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
