import React from "react";
import "./SignUp.css";

function SignUp() {
  return (
    <div className="sign-container">
      <div className="sign-header">
        <h3>Hi there! Order today</h3>
        <h1>To Your Door!</h1>
      </div>
      <div className="main-content">
        <form>
          <input type="text" name="" placeholder="Full name"></input>
          <input type="email" name="" placeholder="Email"></input>
          <input type="text" name="" placeholder="Username"></input>
          <input type="password" name="" placeholder="Password"></input>
          <input type="password" name="" placeholder="Confirm Password"></input>
          <div className="sign-link">
            <button type="submit" className="sign-btn">
              Signup
            </button>
            <p>Already have an account?</p>
            <a href='#'>Login</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
