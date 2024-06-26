import React, { useState, useRef } from "react";
import TextEditor from "./textEditor";
import "./terminal.css"; // Import your CSS file for styling

const jsonCommands = {
  'ls': ["Specify a valid argument"],
  'ls --': ["ls does not require `--`"],
  'ls projects': ["Flask and React Based Self Learning Language Model", "Face and Hand Gesture Recognition Deep Learning Model", "Space Heist Game@Unity-ASP.NET"],
  'ls experience': ["Arbre Creations@02/24-08/24", "Mudslide Creations@12/23-08/24", "Arthalab@06/23-12/23"],
  'web -runtime --js': ["initiateJSRuntime"],
  'web -runtime --py': ["initiatePYRuntime"],
  'web': ["Specify a valid argument"],
  'web --': ["Enter an argument after --"],
  'web --version': ["Web 0.0.1"],
  'web -mode --gui': ["openGui"],
  'web --help': ["ls projects", "ls experience", "web --version", "web --help", 'web -mode --gui', "web -runtime --js", "web -runtime --py"],
}


const Terminal = (props) => {
  const initialPrompt = "DevShell@webSpace ~ $";
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [outPut, setOutput] = useState([])
  const [runtime, setRuntime] = useState(false)
  const inputRef = useRef(null);
  const [terminalTitle, setTerminalTitle]=useState("Web Terminal")
  const [type, setType]=useState("")

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      if (jsonCommands[input] !== undefined) {
        if (jsonCommands[input][0] === 'openGui') {
          setOutput([...outPut, ["Opening Gui Version..."]])
          setTimeout(() => {
            props.handleOpenGui()
          }, 2500)
        } else if (jsonCommands[input][0] === 'initiateJSRuntime') {
          setOutput([...outPut, ["Initiating JavaScript Runtime..."]])
          setTimeout(() => {
            setTerminalTitle("JavaScript Runtime")
            setRuntime(true)
            setType("js")
          }, 2500)
        }else if (jsonCommands[input][0] === 'initiatePYRuntime') {
          setOutput([...outPut, ["Initiating Python Runtime..."]])
          setTimeout(() => {
            setTerminalTitle("Python Runtime")
            setRuntime(true)
            setType("py")
          }, 2500)
        }
        else {
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

  const handleCloseEditor = () => {
    setRuntime(false);
  };

  const handleTitleChange = (title) => {
    setTerminalTitle(title);
  };

  return (
    <div className="terminal">
      <div className="title-bar">
        <span className="title-text">{terminalTitle}</span>
      </div>
      <div className="terminal-body">
        {runtime ? <TextEditor exitButton={handleCloseEditor} changeTitle={handleTitleChange} type={type}/> : (
          <>
            {history.map((line, index) => (
              <div key={index} className="terminal-line">
                {line}
                <ul style={{ marginTop: "0" }}>
                  {outPut[index].map((comOut, comInd) => (
                    <li key={comInd}>
                      <div className="output-line">{comOut}</div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="terminal-input-container">
              <label htmlFor=""></label>
              <label className="terminal-prompt" htmlFor="prompt">{initialPrompt}</label>
              <input
                name="prompt"
                ref={inputRef}
                type="text"
                value={input}
                onChange={handleInputChange}
                onKeyPress={handleEnterPress}
                autoCapitalize="sentences"
                className="terminal-input"
              />
            </div>
          </>
        )}

      </div>
    </div>
  );
};

export default Terminal;
