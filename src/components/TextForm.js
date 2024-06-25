import React,{useState} from 'react'

export default function TextForm(props){
  function handleUpClick(){
    // console.log("up button was clicked "+text)
    let newText=text.toUpperCase()
    setText(newText)
    props.showAlert("Text Converted to Uppercase","success")
  }
  function handleLoClick(){
    // console.log("up button was clicked "+text)
    let newText=text.toLowerCase()
    setText(newText)
    props.showAlert("Text Converted to Lowercase","success")
  }
  function handleClrClick(){
    // console.log("up button was clicked "+text)
    let newText=''
    setText(newText)
    props.showAlert("Text has been cleared","success")
  }
  function handleCopy(){
    let text=document.getElementById("myBox")
    text.select()
    navigator.clipboard.writeText(text.value)
    props.showAlert("Text Has been copied","success")
  }
  function handleExtraSpaces(){
    let newText=text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("Extra spaces have been removed","success")
  }

  function handleOnChange(events){
    // console.log("on change")
    setText(events.target.value)
  }
  let[text,setText]=useState("")
  return(
    <div>
       <div className="container my-3" style={props.mode==='dark'?{color:'white'}:{color:'black'}}>
        <h1>{props.heading}</h1>
             <div className="mb-3">  
    <textarea className="form-control" style={props.mode==='dark'?{backgroundColor:'#202020',color:'white'}:{backgroundColor:'white',color:'black'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
              </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To Lowercase</button>
    <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
    <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    <button className="btn btn-primary mx-2" onClick={handleClrClick}>Clear Text</button>
        </div>
        <div className="container my-3 " style={props.mode==='dark'?{color:'white'}:{color:'black'}}>
          <h1>Your Text Summary</h1>
          <p>{text.split(" ").length} words and {text.length} characters</p>
          <p>you would need approx {text.split(" ").length*0.008} Minutes to read this </p>
          <h2>Preview</h2>
          <p>{text.length>0?text:'Enter something in the text box to preview it here'}</p>
        </div>
    </div>
    );
 }