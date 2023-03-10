import React, { useState } from "react";

import "./LogIn.css";

import { Link, useNavigate } from "react-router-dom";

function LogIn({ onLogIn, setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      username: username,
      password: password,
    };

    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((response) => {
      if (response.status > 199 && response.status < 300) {
        response.json().then((data) => {
          console.log(data);
          localStorage.setItem("user", JSON.stringify(data.customer));
          localStorage.setItem("token", data.jwt);
          navigate("/");
          setUser(formData.username);
        });
      } else {
        response.json().then((err) => {
          console.log(err);
          setErrors(err.error);
        });
      }
    });
  };

  return (
    <div className="login-container">
      <div className="header">
        <h6>Welcome to</h6>
        <h1>To Your Door App</h1>
      </div>
      {errors ? (
        <div style={{ color: "red", margin: "1rem" }}>{errors}</div>
      ) : (
        ""
      )}
      <div className="main">
        <form>
          <span>
            <i className="fa fa-user icons"></i>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          </span>
          <br></br>

          <span>
            <i className="fa fa-lock"></i>
            <input
              type="password"
              placeholder="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </span>
          <br></br>

          <button type="submit" onClick={(e) => handleSubmit(e)} id="login-btn">
            Login
          </button>

          <div className="links">
            <p>Don't have an account?&nbsp;</p>
            <Link to="/signup">Signup</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
