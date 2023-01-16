import React, {useState} from "react";
import { Link} from "react-router-dom"
import "./LogIn.css";
function LogIn({onLogIn, setUser}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      username:username,
      password:password
    }
    console.log(formData);
    setUser(username)

    fetch("http://localhost:3000/login", {
     method: "POST",
     headers: {
      "Content-Type": "application/json",
     },
     body: JSON.stringify(formData), 
    })
    .then((response) => {
      if (response.status > 199 && response.status < 300) {
        response.json()
        .then((data) => {
          console.log(data);
          localStorage.setItem("user", JSON.stringify(data.customer))
          localStorage.setItem("token", data.jwt)
        })
      } else {
        response.json()
        .then((err) => {
          console.log(err);
          setErrors(err.error)
        })
      }
    })
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
            <input type="text" placeholder="Username" name=""></input>
          </span>
          <br></br>

          <span>
            <i className="fa fa-lock"></i>
            <input type="password" placeholder="password" name=""></input>
          </span>
          <br></br>

          <button type="submit" onClick={(e) => handleSubmit(e)} id="login-btn"><Link to="/profile">Login</Link></button>

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
