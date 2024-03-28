import React, { useState, useEffect } from "react";
import TextScramble from "@twistezo/react-text-scramble";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

const LogoPage = ({ setDone }) => {
  const [showPage, setShowPage] = useState(false);

  const [isAtPosition, setIsAtPosition] = useState(false);
  useEffect(() => {
    function handleScroll() {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;

      // Check if user has scrolled to the desired position (250 pixels from the top)
      if (scrollTop) {
        setIsAtPosition(true);
        handleClick();
      } else {
        setIsAtPosition(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  useEffect(() => {
    if (isAtPosition) {
      // Perform your action here
      console.log("Reached the desired position (250 pixels from the top)!");
      // You can replace console.log with any action you want to trigger
    }
  }, [isAtPosition]);

  const handleClick = () => {
    setTimeout(() => {
      setShowPage(true);
      setTimeout(() => {
        setDone(true);
      }, 700);
    }, 0);
  };
  const texts = [
    "web developer",
    "android developer",
    "ai-ml engineer",
    "game developer",
    "data scientist",
  ];

  return (
    <div
      className="App"
      style={{
        backgroundColor: "black",
        display: "flex",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "4.5rem",
        color: "rgb(181, 190, 203)",
        flexDirection: "column",
        overflow: "auto",
        fontFamily: "monospace",
      }}
    >
      <div className={`page ${showPage ? "showStarterPage" : ""}`}></div>
      <div className={`typing-text ${showPage ? "topTheText" : ""}`} id="hello">
        <TextScramble texts={texts} letterSpeed={10} nextLetterSpeed={200} />
      </div>
      <div className="downArrow" onClick={handleClick}>
        <KeyboardDoubleArrowDownIcon
          style={{ fontSize: "5rem", transform: "translateY(25rem)", color:"whitesmoke" }}
        />
      </div>
    </div>
  );
};

export default LogoPage;
