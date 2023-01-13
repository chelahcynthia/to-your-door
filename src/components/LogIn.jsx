import React, { useState } from "react";
import "./LogIn.css";

function LogIn({onLogIn}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    error: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      username:username,
      password:password
    }
    console.log(formData);

    fetch("http://localhost:3000/login", {
     method: "POST",
     headers: {
      "Content-Type": "application/json",
     },
     body: JSON.stringify(formData), 
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => onLogIn(user));
      } else {
        r.json().then((err) => alert(err.error));
      }
    });
  }

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
            <input
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              name=""
            ></input>
          </span>
          <br></br>


          <span>
            <i className="fa fa-lock"></i>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              name=""
            ></input>
          </span>
          <br></br>
          <button type="submit" onClick={(e) => handleSubmit(e)} id="login-btn">Login</button>
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
