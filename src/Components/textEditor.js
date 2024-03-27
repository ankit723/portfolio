import React, { useState, useRef, useEffect } from "react";
import "./TextEditor.css"; // Import your CSS file for styling

const TextEditor = ({ exitButton, changeTitle, type }) => {
  const [text, setText] = useState("");
  const [output, setOutput] = useState([]);
  const editorRef = useRef(null);
  const [skulptLoaded, setSkulptLoaded] = useState(false);
  console.log(type);

  useEffect(() => {
    // Dynamically load Skulpt when the component mounts
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/skulpt/2.0.0/skulpt.min.js";
    script.async = true;
    script.onload = () => setSkulptLoaded(true); // Set Skulpt loaded state to true
    document.body.appendChild(script);

    return () => {
      // Clean up to prevent memory leaks
      document.body.removeChild(script);
    };
  }, []);

  const handleTextChange = () => {
    const newText = editorRef.current.innerText;
    setText(newText);
  };

  const handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === "s") {
      event.preventDefault();
      saveText();
    }
  };

  const executeCode = (code) => {
    console.log("Runtime Server Error...");
  };

  const saveText = () => {
    console.log(text);
    const content = text;
    const blob = new Blob([content], { type: "application/javascript" });

    const url = URL.createObjectURL(blob);

    const downloadLink = document.createElement("a");
    downloadLink.href = url;
    downloadLink.download = "web_terminal_js_runtime.js";

    document.body.appendChild(downloadLink);
    downloadLink.click();

    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(url);
  };
  useEffect(() => {
    editorRef.current.focus();
  }, []);

  const handleExit = () => {
    document.getElementById("f1").style.display = "block";
    document.getElementById("f2").style.display = "block";
    setTimeout(() => {
      changeTitle("Web Terminal");
      exitButton();
    }, 2000);
  };

  const handleRun = () => {
    let tempOutput = [];
    const originalLog = console.log;
    console.log = (...args) => {
      tempOutput.push(args.join(" "));
    };

    try {
      if (type === "js") {
        eval(text);
      } else {
        executeCode(text);
      }
    } catch (error) {
      tempOutput.push(`Error: ${error.message}`);
    } finally {
      console.log = originalLog;
      setOutput((prevOutput) => [...prevOutput, tempOutput]);
    }
  };

  return (
    <>
      <div className="text-editor">
        <div className="title-bar" style={{ justifyContent: "flex-end" }}>
          <button
            className="textEditor-RunBotton editor-button"
            onClick={handleRun}
          >
            Run
          </button>
          <button
            className="textEditor-ExitBotton editor-button"
            onClick={handleExit}
          >
            Exit
          </button>
          <button
            className="textEditor-ExitBotton editor-button"
            onClick={saveText}
          >
            Save
          </button>
        </div>
        <span className="terminal-prompt" style={{ margin: "0 10px" }}>
          {type === "js" ? "NodeJS@v21.6.2" : "python@v3.11.2"}
        </span>
        <span
          className="terminal-prompt"
          style={{ margin: "0 10px", color: "violet" }}
        >
          webVim@v0.0.1
        </span>
        <div
          className="text-area"
          onKeyDown={handleKeyDown}
          contentEditable
          tabIndex={0}
          ref={editorRef}
          onInput={handleTextChange}
        />
        <span
          className="terminal-prompt"
          id="f1"
          style={{ margin: "0 10px", color: "violet", display: "none" }}
        >
          {type === "js" ? "Closing JavaScript Runtime..." : "Closing Python Runtime..."}
        </span>
        <span
          className="terminal-prompt"
          id="f2"
          style={{ margin: "0 10px", color: "violet", display: "none" }}
        >
          Shutting Down webVim Instance...
        </span>
      </div>
      <div
        className="title-bar"
        style={{ marginBottom: "2px", marginTop: "1rem" }}
      >
        <span className="title-text">Output</span>
      </div>
      <div
        style={{
          padding: "0.8rem 1rem",
          backgroundColor: "#1e1e1e4e",
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
          marginBottom: "0",
          overflowY: "scroll",
          height: "10rem",
        }}
      >
        {output.map((out) => {
          return (
            <div>
              <span style={{color:"yellow"}}>
                {(type === "js" ? "nodeJs@v21.6.2~$ " : "python@v3.11.2~$ ")}
              </span>
              {out.map((o) => (
                <>{o}</>
              ))}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TextEditor;
