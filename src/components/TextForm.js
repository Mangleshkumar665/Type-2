import React, { useEffect, useState } from "react";
import Result from "./Result";

export default function TextForm(props) {
  // logic for output

  // counter logic

  const [time, setTime] = useState(0);
  const [resultDisplay, setResultDisplay] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  function resdisplay(value) {
    setResultDisplay(value);
  }

  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((time) => time + 1);
        if (time === 10) {
          clearInterval(interval);
        }
      }, 1000);
    }
    return () => {
      clearInterval(interval);
      setTime(0);
    };
  }, [isRunning]);

  // wpm calculations
  const wpmCalculations = (text, errorNo) => {
    console.log();
    let wpm =
      Math.floor(
        text.split(" ").filter((element) => element !== "").length - errorNo
      ) * 4;
    return wpm;
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
    { time <=15?
      <div className="">
        <div>
          <h2>
              <span className="badge bg-secondary">Timer {time}</span>
            
            
          </h2>
        </div>

        <div className=" d-flex    flex-wrap    ">
          <div className="card " style={{width:"50vw",margin:"20px"}}>
            <div className="card-body">
              <h4 className="card-title" >Passage</h4>
              <h5 className="card-subtitle mb-2 text-muted">#1</h5>
              <p className="card-text" > {props.textVal}</p>

              <a href="/" className="card-link">
                Change
              </a>
            </div>
          </div>

          <div className="mb-3 textAreapos" style={{width:"30vw",margin:"20px"}}>
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              
            </label>
            
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="8"
                onChange={handleOnChange}
                value={text}
                spellCheck="false"
                placeholder="start typing here !!"
                onClick={() => setIsRunning(true)}
                style={{resize:"none"}}
              ></textarea>
            
          </div>

          <div className=" container my-3 d-flex ">
            <h4 className="" style={{marginRight:"30px",padding:"10px",border:"1px solid grey",borderRadius:"5px"}} >
              <strong> Words : </strong>{" "}
              {text.split(" ").length -
                text.split(" ").filter((words) => {
                  return words === ""
                }).length}
            </h4>
            
            <h4 style={{color:"red",padding:"10px",border:"1px solid grey",borderRadius:"5px"}}>
              <strong> Errors : </strong> {errorNo}
            </h4>
          </div>
        </div>
      </div> :<Result
        errorNo={errorNo}
        text={text}
        wpm={wpmCalculations(text, errorNo)}
        count={count}
        resdisplay={resdisplay}
      />}
      
    </>
  );
}
