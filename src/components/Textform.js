import React,{useState} from 'react'




export default function Textform(props) {
    const handleUpClick=()=>{
        console.log('Uppercase was clicked'+text);
        let newtext=text.toUpperCase();
        setText(newtext);
    }

    const handleUpClick2=()=>{
      console.log('Lowercase was clicked '+text);
      let newtext=text.toLowerCase();
      setText(newtext);
    }

    const handleOnChange=(event)=>{
setText(event.target.value);
    }

    const [text,setText]=useState("Enter text here");
  return (
  <>
  <h1>{props.headings}</h1>
  <div class="mb-5">
    <label for="myBox" className="form-label">{props.headings}</label>
    
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="3"></textarea>
  
  </div>
  <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to UpperCase</button>
  <button className='btn btn-primary mx-2' onClick={handleUpClick2}>Convert to Lowercase</button>

  <div className="container my-3">
    <h2>
    Your text summary is here
    </h2>
    <p>{text.split(" ").length} words {text.length} characters</p>
    <p>how many minutes to read this words {0.008*text.split(" ").length}</p>
    <h2>Preview</h2>
    <p>{text}</p>


   </div >
  </>
  )
}
