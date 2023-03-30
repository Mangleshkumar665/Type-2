import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Result(props) {
  const Navigate = useNavigate();

  return (
    <div className="card text-center result my-5 container ">
      <div className="card-body">
        <h1 className="card-title">Results</h1>
        <div className=" container my-3">
          <div className="cobtianer my-3 display-2"> Wpm {props.wpm}</div>

          <div className=" my-3 display-4">Error Counts {props.errorNo}</div>
        </div>

        <button
          className="btn-restart   "
          onClick={() => Navigate(0)}
          
        >
          Restart
        </button>
      </div>
    </div>
  );
}
