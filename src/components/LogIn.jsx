import React from "react";
import "./LogIn.css";

function LogIn() {
  return (
    <div className="container">
      <div className="header">
        <h6>Welcome to</h6>
        <h1>To Your Door App</h1>
      </div>
      <div className="main">
        <form>
          <span>
            <i className="fa fa-user"></i>
            <input type="text" placeholder="Username" name=""></input>
          </span>
          <br></br>

          <span>
            <i className="fa fa-lock"></i>
            <input type="password" placeholder="password" name=""></input>
          </span>
          <br></br>
          <button id="login-btn">Login</button>
          <div className="links">
                <p>Don't have an account?&nbsp;</p>
                <a href="#">Signup</a>
            </div>
        </form>
        
      </div>
    </div>
  );
}

export default LogIn;
