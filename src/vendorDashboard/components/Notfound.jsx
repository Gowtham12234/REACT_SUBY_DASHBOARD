import React from "react";
import { Link } from "react-router-dom";
const Notfound = () => {
  return(
     <>
     
  <div className="errorSection">
    <Link to="/" style={{fontSize :"1.5rem",color:"darkblue"}}> go back</Link>
    <h1>404</h1>
    <div>Page not found</div>

  </div>
  
  </>
  )
};

export default Notfound;
