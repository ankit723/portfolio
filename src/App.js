import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/home";
import Starter from "./Components/starter";

const MouseDot = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX - 7, y: e.clientY - 4 });
  };

  const handleMouseDown = () => {
    setIsClicked(true);
  };

  const handleMouseUp = () => {
    setIsClicked(false);
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const dotSize = isClicked ? 40 : 15; // Change the size based on the click state

  return (
    <div
      className={`mouse-dot ${isClicked ? "clicked" : ""}`}
      style={{
        left: position.x,
        top: position.y,
        width: dotSize,
        height: dotSize,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {" "}
      .
    </div>
  );
};

function App() {
  return (
    <Router>
      <MouseDot />

      <Routes>
        <Route path="/" element={<Starter />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
