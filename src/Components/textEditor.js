import React, { useState, useRef, useEffect } from "react";
import "./TextEditor.css"; // Import your CSS file for styling

const TextEditor = ({ exitButton, changeTitle }) => {
    const [text, setText] = useState("");
    const [output, setOutput] = useState([]);
    const initialPrompt = "NodeJS@v21.6.2"
    const editorRef = useRef(null);


    const handleTextChange = (event) => {
        const newText = event.target.value;
        setText(newText); 
    };

    const handleKeyDown = (event) => {
        if (event.ctrlKey && event.key === "s") {
            event.preventDefault();
            saveText();
        }
    };

    const saveText = () => {
        console.log(text);
        const content = text
        const blob = new Blob([content], { type: 'application/javascript' });

        const url = URL.createObjectURL(blob);

        const downloadLink = document.createElement('a');
        downloadLink.href = url;
        downloadLink.download = 'web_terminal_js_runtime.js'; 
        
        document.body.appendChild(downloadLink);
        downloadLink.click();

        document.body.removeChild(downloadLink);
        URL.revokeObjectURL(url);
    };
    useEffect(() => {
        editorRef.current.focus();
    }, []);

    const handleExit = () => {
        document.getElementById("f1").style.display = "block"
        document.getElementById("f2").style.display = "block"
        setTimeout(() => {
            changeTitle("Web Terminal")
            exitButton()
        }, 2000)
    }

    const handleRun = () => {
        let tempOutput = [];
        const originalLog = console.log;
        console.log = (...args) => {
            tempOutput.push(args.join(" "));
        };

        try {
            eval(text);
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
                    <button className="textEditor-RunBotton editor-button" onClick={handleRun}>Run</button>
                    <button className="textEditor-ExitBotton editor-button" onClick={handleExit}>Exit</button>
                    <button className="textEditor-ExitBotton editor-button" onClick={saveText}>Save</button>
                </div>
                <span className="terminal-prompt" style={{ margin: '0 10px' }}>{initialPrompt}</span>
                <span className="terminal-prompt" style={{ margin: '0 10px', color: "violet" }}>webVim@v0.0.1</span>
                <textarea
                    className="text-area"
                    onKeyDown={handleKeyDown}
                    tabIndex={0}
                    ref={editorRef}
                    value={text}
                    onChange={handleTextChange}
                />
                <span className="terminal-prompt" id="f1" style={{ margin: '0 10px', color: "violet", display: "none" }}>Closing JavaScript Runtime...</span>
                <span className="terminal-prompt" id="f2" style={{ margin: '0 10px', color: "violet", display: "none" }}>Shutting Down webVim Instance...</span>
            </div>
            <div className="title-bar" style={{ marginBottom: "2px", marginTop: '1rem' }}>
                <span className="title-text">Output</span>
            </div>
            <div style={{ padding: '0.8rem 1rem', backgroundColor: "#1e1e1e4e", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", marginBottom: "0", overflowY: 'scroll', height: '10rem' }}>
                {output.map((out) => {
                    return (
                        <div>
                            <span>{"nodeJs@v21.6.2~$ "}</span>
                            {out.map((o) => (
                                <>
                                    {o}
                                </>
                            ))}
                        </div>

                    )
                })}
            </div>
        </>
    );
};

export default TextEditor;
