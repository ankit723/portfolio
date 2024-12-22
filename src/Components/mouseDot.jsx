import React, { useState, useEffect } from "react";

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

export default MouseDot;