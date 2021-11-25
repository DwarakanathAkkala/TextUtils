import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        SetText(newText);
        props.showAlert("Converted to Upper Case!!", "success");
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        SetText(newText);
        props.showAlert("Converted to Lower Case!!", "success");
    }

    const handleCopy = () => {
        var text = document.getElementById("text");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied to Clipboard!!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        SetText(newText.join(' '));
        props.showAlert("Extra Spaces removed!!", "success");
    }

    const handleOnChange = (event) => {
        SetText(event.target.value);
    }

    const handleClearClick = () => {
        let newText = '';
        SetText(newText);
        props.showAlert("Text Erased!!", "success");
    }

    const [text, SetText] = useState('');

    return (
        <>
        <div className="container" >
            <div className="mb-3" style= {{color : props.mode === 'dark' ? 'white' : '#042743'}} >
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} id="text" style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743'}} onChange={handleOnChange} rows="8"></textarea>
            </div>
            <button className="bt btn-primary mx-1" onClick={handleUpClick} >Convert to Upper Case</button>
            <button className="bt btn-primary mx-1" onClick={handleLowClick} >Convert to Lower Case</button>
            <button className="bt btn-primary mx-1" onClick={handleClearClick} >Clear Text</button>
            <button className="bt btn-primary mx-1" onClick={handleCopy} >Copy Text</button>
            <button className="bt btn-primary mx-1" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
        </div>

        <div className="container" style= {{color : props.mode === 'dark' ? 'white' : '#042743'}} >
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} Words and {text.length} characters </p>
            <p>{0.008 * text.split(" ").length} to read</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : "Enter text in the above container to Preview"}</p>
        </div>
        </>
    )
}
