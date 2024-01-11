import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log('Uppercase was clicked' + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    }
    const handleLoClick = () => {
        let newLowerText = text.toLowerCase();
        setText(newLowerText);
        props.showAlert("Converted to lowercase", "success");
    }
    const handleClearClick = () => {
        let newClearText = '';
        setText(newClearText);
        props.showAlert("Text cleared", "success");
    }
    const handleSpeechClick = () => {
        let textToSpeach = new SpeechSynthesisUtterance();
        textToSpeach.text = text;
        window.speechSynthesis.speak(textToSpeach);
        props.showAlert("Text to speech converted", "success");
    }
    const handleTrimClick = () => {
        let removeSpace = text.replace(/\s/g, "");
        setText(removeSpace);
        props.showAlert("Extra spaces removed", "success");
    }
    const handleOnChange = (event) => {
        // console.log('On Change');
        setText(event.target.value)
    }
    const handleCopy = () => {
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied ti clipboard", "success");
    }
    const [text, setText] = useState('');
    // text = "New text"; //Wrong way to change the state
    // setText("New text"); //Correct way to change the state
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#292930' }}>
                <h1>{props.heading} </h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#292930' }} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={handleSpeechClick}>Text to speech</button>
                <button className="btn btn-primary mx-1" onClick={handleTrimClick}>Remove white spaces</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#292930' }}>
                <h2>Your text summary</h2>
                <p>{text.trim() === "" ? 0 : text.match(/\S+/g).length} words, {text.replace(/\s+/g, "").length} characters</p>
                <p>{text.trim() === "" ? 0.00 : 0.008 * text.match(/\S+/g).length} Minutes to read</p>

                <h3>Preview </h3>
                <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>

            </div>
        </>
    )
}
