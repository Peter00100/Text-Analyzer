import React, {useState} from 'react'

export default function Textform(props) {

    const handleUpClick= () =>{
          setText(text.toUpperCase())
    }

    const handleCopy= () =>{
        var text =document.getElementById('textBox');
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleLwClick= () =>{
        setText(text.toLowerCase())
    }

    const handleClearClick= () =>{
        setText("")
    }

    const handleOnChange= (event) =>{
        setText(event.target.value)
    }
    const[text, setText] = useState("");
  return (
    <>
        
        <div className='container' style={{backgroundColor: props.mode === 'dark'? '#2b2b2c': 'pink',color: props.mode === 'dark'? 'white': 'black'}}>
            <h1>{props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor: props.mode === 'dark'? '#2b2b2c': 'pink',color: props.mode === 'dark'? 'white': 'black'}} value={text} onChange={handleOnChange} id="textBox" rows="10"></textarea>
                <button className="btn btn-dark my-1" onClick={handleClearClick} >Clear Text</button>
            </div>
            <button className="btn btn-dark" onClick={handleUpClick} >Convert to UpperCase</button>
            <button className="btn btn-dark mx-1" onClick={handleLwClick} >Convert to LowerCase</button>
            <button className="btn btn-dark mx-1" onClick={handleCopy} >Copy</button>
            
        </div >
        <div className="container" style={{backgroundColor: props.mode === 'dark'? '#2b2b2c': 'pink',color: props.mode === 'dark'? 'white': 'black'}}>
            <h1>Your Text Summary</h1>
            <p>
                {/* {text.length} characters {text.length>0?text.split(" ").length:"0"} words  */}
                {text.length} characters {text && text.split(" ").length} words 
            </p>
            <h2> Entered Text: </h2>
            <p>{text.length>0?text:"Enter your text to preview"}</p>
        </div>
    </>
  )
}
