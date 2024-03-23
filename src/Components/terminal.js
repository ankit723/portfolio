import React, { useState, useRef } from "react";
import "./terminal.css"; // Import your CSS file for styling

const jsonCommands = {
  'ls': ["Specify a valid argument"],
  'ls --': ["ls does not require `--`"],
  'ls projects': ["Flask and React Based Self Learning Language Model", "Face and Hand Gesture Recognition Deep Learning Model", "Space Heist Game@Unity-ASP.NET"],
  'ls experience': ["Arbre Creations@02/24-08/24", "Mudslide Creations@12/23-08/24", "Arthalab@06/23-12/23"],
  'web': ["Specify a valid argument"],
  'web --': ["Enter an argument after --"],
  'web --version': ["Web 0.0.1"],
  'web -mode --gui': ["openGui"],
  'web --help': ["ls projects", "ls experience", "web --version", "web --help", 'web -mode --gui'],
}


const Terminal = (props) => {
  const initialPrompt = "CodeShell@DevSpace ~ $";
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [outPut, setOutput] = useState([])
  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      if (jsonCommands[input] !== undefined) {
        if(jsonCommands[input][0]==='openGui'){
          setOutput([...outPut, ["Opening Gui Version..."]])
          setTimeout(()=>{
            props.handleOpenGui()
          }, 2000)
        }else{
          setOutput([...outPut, jsonCommands[input]])
        }
      } else {
        if (input.includes("web --")) {
          setOutput([...outPut, ["Enter Valid Argument"]])
        }
        if (input.includes("ls ")) {
          setOutput([...outPut, ["Specify Valid Argument"]])
        } else {
          setOutput([...outPut, ["Enter Valid Command"]])
        }
      }
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
            <ul style={{ marginTop: "0" }}>
              {outPut[index].map((comOut, comInd) => (
                <li>
                  <div className="output-line" key={comInd}>
                    {comOut}
                  </div>
                </li>
              ))}
            </ul>

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
