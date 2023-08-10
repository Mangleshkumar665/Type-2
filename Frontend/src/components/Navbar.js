import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="">
      <div className="d-flex justify-content-center  p-1 ">
        <div
          className=" display-1  "
          style={{ fontWeight: "400", color: "#393939" }}
        >
          <Link to="/" style={{all:"unset"}}>(TYPE)<sup>2</sup></Link>
          
        </div>
        </div>
        <div className="nav-btns-wrapper d-flex justify-content-end align-items-center " >
          
            {/* <Link to="/profile"   className="btn option-btn-imp  nav-btns"  > profile </Link>
          
            <Link to="/Login"   className="btn option-btn-imp nav-btns" > Login </Link> */}
          
        </div>

    </div>
  );
}
