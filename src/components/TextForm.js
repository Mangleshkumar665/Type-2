import React, { useEffect, useState } from "react";
import Result from "./Result";




export default function TextForm(props) {
  // logic for output

  
// counter logic 
  const [count, setCount] = useState(0);
  const [isStart, setIsStart] = useState(false);

  const timer = () => {
    if(isStart){
    let interv = setInterval(() => {
      setCount((old) => old + 1);
    }, 1000);

    setTimeout(function () {
      clearInterval(interv);
      setCount(0);     
    }, 5000);

    
  }
  };
  useEffect(timer, [isStart]);
const onclickHandler=()=>{
  setIsStart(true)
}


// wpm calculations 
  const wpmCalculations = (text , errorNo) => {
    let wpm  = Math.floor(( text.split(" ").length - errorNo)*4) 
    return wpm

  };

  // Error  Calculation  ---------------------------------------------
  const errors = (varText) => {
    let totError = [];

    const originalText = props.textVal.split(" ");

    for (let i = 0; i < varText.length; i++) {
      if (originalText[i] !== text.split(" ")[i]) {
        totError.push(varText[i]);
      }
    }
    

    setErrorNo(totError.length - 1);
  };

  // textarea ---------------------------------------
  const [text, setText] = useState("");

  const [errorNo, setErrorNo] = useState(0);

  const handleOnChange = (event) => {
    setText(event.target.value);
    errors(event.target.value.split(" "));

    
  };

  return (
    <>
      {/* <div  style={textformCss}> */}
      <div>
        <h2>
          <span className="badge bg-secondary" >
            Timer {count}
          </span>
          {/* <button onClick={start}>Button</button> */}
        </h2>
      </div>

      <div className="container" >
        <div className="card" >
          <div className="card-body">
            <h5 className="card-title">Passage</h5>
            <h6 className="card-subtitle mb-2 text-muted">#1</h6>
            <p className="card-text"> {props.textVal}</p>

            <a href="/" className="card-link">
              Change
            </a>
          </div>
        </div>

        {/* <div className="mb-3 textAreapos" style={textformCss}  onClick={onclickHandler} > */}
        <div className="mb-3 textAreapos"   onClick={onclickHandler} >
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            {" "}
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            onChange={handleOnChange}
            value={text}
          ></textarea>
        </div>

        {/* <div className=" container my-3" style={textformCss}> */}
        <div className=" container my-3">
          

          <h4>
            
            <strong> Words : </strong>{" "}
            {text.split(" ").length -
              text.split(" ").filter((words) => {
                return words === "";
              }).length}{" "}
          </h4>
        </div>

        <Result errorNo={errorNo} text={text}  wpm={wpmCalculations(text,errorNo)}   count ={count} />

      </div>
    </>
  );
}
