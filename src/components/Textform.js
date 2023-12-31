import React, {useState} from 'react';

export default function TextForm(props){
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Text convert to upperCase','success');
    }

    const extractEmail = ()=>{
        return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi); 
    }
    
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Text convert to LowerCase','success');
    }

    const handleOnChange =  (event)=>{
        setText(event.target.value);
    }

    const handleCopy = () =>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard!", "success");
    }
    const handleExtraSpaces =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert("Extra spaces removed ", "success");
    }

    const[text, setText] = useState('Enter text here');
    return(
        <>
        <div style={{color:props.mode==='light'?'black':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className='form-control' value={text} style={{backgroundColor: props.mode==='light'?'white':'#324a62', color: props.mode==='light'?'black':'white'}} onChange={handleOnChange} id="myBox" row="8"></textarea>
            </div>
            <button className='btn btn-primary mx-2' disabled={text.length===0} onClick={handleUpClick}>Convert to UpperCase</button>
            <button className='btn btn-primary mx-2' disabled={text.length===0} onClick={handleLoClick}>Convert to LowerCase</button>
            <button className='btn btn-primary mx-2' disabled={text.length===0} onClick={handleCopy}>Copy text</button>
            <button className='btn btn-primary mx-2' disabled={text.length===0} onClick={handleExtraSpaces}>Remove extraSpaces</button>
        </div>
       <div className='container mb-3'style={{color: props.mode==='light'?'black':'white'}}>
        <h2>Exract Email</h2>
        <p>Email: {extractEmail()}</p>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(/\s+/).filter((element=>{return element.length!==0})).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter something in the textBox above to preview it here'}</p>
       </div>
        </>
    )
} 
