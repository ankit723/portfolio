import React, { useEffect, useState } from "react";

const StarterMouseDot = ({arrowLocation}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorGradient, setCursorGradient] = useState(null);

  useEffect(() => {
    const distance = Math.sqrt(
      Math.pow(arrowLocation.x - position.x, 2) + 
      Math.pow(arrowLocation.y - position.y, 2)
    );
  
    const maxDistance = Math.sqrt(
      Math.pow(window.innerWidth, 2) + Math.pow(window.innerHeight, 2)
    );
    const normalizedDistance = 1 - Math.min(distance / maxDistance, 1);
    const brightnessFactor = 100 * normalizedDistance;
  
    const gradient = `radial-gradient(circle, 
      ${gradientColors.color1} ${Math.max(5, brightnessFactor)}%, 
      ${gradientColors.color2} ${Math.min(100, brightnessFactor + 20)}%, 
      ${gradientColors.color3} 100%)`;
  
    setCursorGradient(gradient);
  }, [arrowLocation, position]);

  const [gradientColors, setGradientColors] = useState({
    color1: "rgba(255, 0, 149, 0.14)",
    color2: "rgba(0, 255, 255, 0.15)",
    color3: "rgba(38, 0, 255, 0.15)",
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
            background: cursorGradient,
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
