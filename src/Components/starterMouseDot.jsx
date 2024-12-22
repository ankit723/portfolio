import React, { useEffect, useState } from "react";

const StarterMouseDot = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [gradientColors, setGradientColors] = useState({
    color1: "rgba(255, 0, 150, 0.4)",
    color2: "rgba(0, 255, 255, 0.2)",
    color3: "rgba(0, 0, 0, 0)",
  });
  const [isActive, setIsActive] = useState(true); // Toggle for the effect

  useEffect(() => {
    let targetX = 0,
      targetY = 0;

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const smoothMovement = () => {
      if (!isActive) return; // Stop updating position when inactive
      setPosition((prev) => ({
        x: prev.x + (targetX - prev.x),
        y: prev.y + (targetY - prev.y),
      }));
      requestAnimationFrame(smoothMovement);
    };

    window.addEventListener("mousemove", handleMouseMove);
    smoothMovement();

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isActive]); // Effect is controlled by isActive

  useEffect(() => {
    const generateRandomColor = () =>
      `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)}, 0.3)`; // Lower opacity for softer colors

    const changeColors = () => {
      if (!isActive) return; // Stop changing colors when inactive
      setGradientColors({
        color1: generateRandomColor(),
        color2: generateRandomColor(),
        color3: "rgba(0, 0, 0, 0)", // Fully dissolved at the edges
      });
    };

    const interval = setInterval(changeColors, 2000);
    return () => clearInterval(interval);
  }, [isActive]); // Effect is controlled by isActive

  const handleClick = () => {
    setIsActive((prev) => !prev); // Toggle the effect
  };

  return (
    <>
      {isActive && (
        <div
          className="mouse-dot"
          style={{
            left: position.x,
            top: position.y,
            width: 550,
            height: 450,
            position: "absolute",
            pointerEvents: "none",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${gradientColors.color1}, ${gradientColors.color2}, ${gradientColors.color3} 65%)`,
            mixBlendMode: "screen",
            boxShadow: `0 0 30px ${gradientColors.color1}, 
                        0 0 60px ${gradientColors.color2}, 
                        0 0 100px ${gradientColors.color2}`,
            filter: "blur(80px)", // Increased blur for a dissolved effect
            opacity: 0.8,
            transform: "translate(-50%, -50%)", // Center aligned with cursor
            transition: "background 7s ease, box-shadow 2s ease"
          }}
        ></div>
      )}
      <div
        onClick={handleClick}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          cursor: isActive ? "none" : "default", // Hide cursor when active
        }}
      ></div>
    </>
  );
};

export default StarterMouseDot;
