import React, { useEffect, useState } from "react";
import Result from "./Result";
import {useSelector} from 'react-redux'

export default function TextForm(props) {
  
  // time selection redux logic 


  const selectedTime = useSelector((state)=>state.time);
  
  
  
  
  
  
  
  
  
  
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
        
      }, 1000);
    }
    return () => {
      clearInterval(interval);
      setTime(0);
    };
  }, [isRunning]);

  // wpm calculations
  const wpmCalculations = (text, errorNo) => {
    let wpm =
      
        Math.floor(((text.split(" ").filter((element) => element !== "").length - errorNo)*60 )/selectedTime[selectedTime.length-1])
      ;
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
  const [alert, setAlert] = useState("")

  const [errorNo, setErrorNo] = useState(0);

  const handleOnChange = (event) => {
    setText(event.target.value);
    errors(event.target.value.split(" "));
  };

  const alertDisplay = ()=>{

    setTimeout(() => {
      setAlert("d-none")
    }, 5000);

  }
  useEffect(() => {
    alertDisplay()

  }, [])
  

  return (
    <>
      {time <= selectedTime[selectedTime.length-1] ? (
        <div className="">
          <div className=" mx-4 ">
            <h2>
              <span className="badge  btn-timer">Timer {time}</span>
            </h2>
          </div>

          <div className=" d-flex    flex-wrap    ">
            <div className="card " style={{ width: "50vw", margin: "20px" }}>
              <div className="card-body"style={{ boxShadow: "rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px" }}>
                <h4 className="card-title" style={{fontWeight:"bolder", color:"#393939" }}>Passage</h4>
                
                <p className="card-text" style={{color:'#393939', fontSize:"1.2rem"}}> {props.textVal}</p>

                
              </div>
            </div>
            <div
              className="mb-3"
              style={{ width: "30vw", margin: "20px" }}
            >
              <div
                className={`alert alert-warning alert-dismissible fade show ${alert} `}
                role="alert"
              >
                Click below to start the timer 
                <button
                  type="button"
                  className="btn close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              ></label>

              <textarea
                className="form-control "
                id="exampleFormControlTextarea1"
                rows="8"
                onChange={handleOnChange}
                value={text}
                spellCheck="false"
                placeholder="start typing here !!"
                onClick={() => setIsRunning(true)}
                
                style={{ boxShadow: "rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px",resize: "none" ,color:"#393939",fontSize:"1.2rem"  }}
              ></textarea>
            </div>

            <div className=" container my-3 d-flex ">
              <h4
                className=""
                style={{
                  marginRight: "30px",
                  padding: "10px",
                  border: "1px solid grey",
                  borderRadius: "5px",
                }}
              >
                <strong> Words : </strong>{" "}
                {text.split(" ").length -
                  text.split(" ").filter((words) => {
                    return words === "";
                  }).length}
              </h4>

              <h4
                style={{
                  color: "red",
                  padding: "10px",
                  border: "1px solid grey",
                  borderRadius: "5px",
                }}
              >
                <strong> Errors : </strong> {errorNo}
              </h4>
            </div>
          </div>
        </div>
      ) : (
        <Result
          errorNo={errorNo}
          text={text}
          wpm={wpmCalculations(text, errorNo)}
          count={count}
          resdisplay={resdisplay}
        />
      )}
    </>
  );
}
