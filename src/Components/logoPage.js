import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import _ from "lodash";
import TextScramble, { ScrambleTexts } from "@twistezo/react-text-scramble";
import arrowDown from "../background-image/arrowDown.png";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

const TypingEffect = ({ texts, interval, pauseInterval }) => {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    let timeout;

    const typeText = () => {
      if (reverse) {
        setDisplayText((prevText) => prevText.slice(0, -1));
      } else {
        setDisplayText((prevText) => prevText + texts[textIndex][charIndex]);
        setCharIndex((prevIndex) => prevIndex + 1);
      }
    };

    const resetText = () => {
      setCharIndex(0);
      setReverse(true);
    };

    const typingInterval = setInterval(() => {
      if (charIndex < texts[textIndex].length && !reverse) {
        typeText();
      } else {
        if (reverse) {
          if (displayText.length > 0) {
            typeText();
          } else {
            clearInterval(typingInterval);
            timeout = setTimeout(() => {
              resetText();
            }, pauseInterval);
          }
        } else {
          resetText();
        }
      }
    }, interval);

    return () => {
      clearInterval(typingInterval);
      clearTimeout(timeout);
    };
  }, [
    texts,
    textIndex,
    charIndex,
    interval,
    pauseInterval,
    reverse,
    displayText.length,
  ]);

  useEffect(() => {
    const autoChangeText = setInterval(() => {
      const nextIndex = (textIndex + 1) % texts.length;
      setTextIndex(nextIndex);
      setReverse(false);
      setDisplayText(""); // Reset display text before starting the new text
    }, texts.length * interval + pauseInterval);

    return () => {
      clearInterval(autoChangeText);
    };
  }, [textIndex, interval, pauseInterval, texts]);

  return (
    <div>
      <h1
        style={{
          color: "white",
          margin: "0",
          textAlign: "center",
          marginTop: "3rem",
          fontSize: "4rem",
        }}
      >
        {"."}
        {displayText}
      </h1>
    </div>
  );
};

const LogoPage = ({ setDone }) => {
  const navigate = useNavigate();
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
        color: "white",
        display: "flex",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "4.5rem",
        color: "rgb(181, 190, 203)",
        flexDirection: "column",
        overflow: "auto",
      }}
    >
      <div className={`page ${showPage ? "showStarterPage" : ""}`}></div>
      <div className={`typing-text ${showPage ? "topTheText" : ""}`} id="hello">
        <TextScramble texts={texts} letterSpeed={10} nextLetterSpeed={200} />
      </div>
      <div className="downArrow" onClick={handleClick}>
        <KeyboardDoubleArrowDownIcon style={{ fontSize: "10rem", transform: "translateY(20rem)" }}/>
      </div>
    </div>
  );
};

export default LogoPage;
