import React, { useState } from 'react';

export default function Textform(props) {
  const [text, setText] = useState('Enter the text here');

  const handleUp = () => {
    console.log("Uppercase was clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showalert("converted to uppercase", "success");
  }

  const handleDn = () => {
    console.log("LowerCase was clicked: " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showalert("converted to Lowercase", "success");
  }

  const clearText = () => {
    console.log("ClearText was clicked");
    setText("");
    props.showalert("Clear text successfully", "success");
  }

  const copyText = () => {
    var newText = document.getElementById("myBox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showalert("Copy text successfully", "success");
  }

  const clearSpaces = () => {
    let newText = text.split(/[ ]+/).join(" ");
    setText(newText);
    props.showalert("Clear extra space successfully", "success");
  }

  const handleChange = (event) => {
    setText(event.target.value);
  }

  return (
    <>

      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label"></label>
          <textarea
            className="form-control my-3"
            value={text}
            id="myBox"
            onChange={handleChange}
            style={{
              backgroundColor: props.mode === 'dark' ? '#333' : 'white',
              color: props.mode === 'dark' ? 'white' : 'black'
            }}
            rows="8"
          ></textarea>
          <button className="btn btn-primary mx-1" onClick={handleUp}>Convert to Uppercase</button>
          <button className="btn btn-primary mx-1" onClick={handleDn}>Convert to Lowercase</button>
          <button className="btn btn-primary mx-1" onClick={clearText}>Clear Text</button>
          <button className="btn btn-primary mx-1" onClick={copyText}>Copy Text</button>
          <button className="btn btn-primary mx-1" onClick={clearSpaces}>Clear Extra Spaces</button>
        </div>
        <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
          <h2>Your Text Summary</h2>
          <p>{text.split(/\s+/).filter((element) => element.length !== 0).length} words and {text.length} characters</p>
          <p>{0.008 * text.split(" ").filter((element) => element.length !== 0).length} Minutes read</p>
          <h2>Preview</h2>
          <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
        </div>
      </div>
    </>
  );
}
