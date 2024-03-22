import React, { useState, useRef } from "react";
import "./terminal.css"; // Import your CSS file for styling

const Terminal = () => {
  const initialPrompt = "CodeShell@DevSpace ~ $";
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      const newLine = `${initialPrompt} ${input}`;
      setHistory([...history, newLine]);
      setInput("");
      inputRef.current.focus();
    }
  };

  return (
    <div className="terminal">
      <div className="title-bar">
        <span className="title-text">Web Terminal</span>
      </div>
      <div className="terminal-body">
        {history.map((line, index) => (
          <div key={index} className="terminal-line">
            {line}
          </div>
        ))}
        <div className="terminal-input-container">
          <span className="terminal-prompt">{initialPrompt}</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyPress={handleEnterPress}
            className="terminal-input"
          />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
