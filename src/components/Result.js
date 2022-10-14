import React, { useState } from 'react'

export default function Result(props) {

    const [resultComponentCss, setResultComponentCss] = useState("Block")
    
    // console.log(props.componentDisplay)
    function resetElements(){
      setResultComponentCss(props.resultDisplay)
    }

    
    const resultCss ={
        display : resultComponentCss
    }
    
    
  return (
    <div className="card text-center result my-5 " style={resultCss}>
  
  <div className="card-body"  >
    <h5 className="card-title">Results !!</h5>
    <div className=" container my-3">
          <h4> Error Count {props.errorNo}  
          <div className='cobtianer my-3'> Wpm ={props.wpm}
          </div>
          </h4>
        </div>

    
    <button className="btn btn-primary" onClick={resetElements}>Retry</button>
  </div>

</div>

  

  )
}

