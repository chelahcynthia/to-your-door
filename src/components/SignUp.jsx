import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

function SignUp() {
  const [formData, setFormData] = useState({
    first_name: "",
    email: "",
    username: "",
    password: "",
    password_confirmation: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="sign-container">
      <div className="sign-header">
        <h3>Hi there! Order today</h3>
        <h1>To Your Door!</h1>
      </div>
      <div className="main-content">
        <form>
          <input
            type="text"
            name=""
            onChange={(e) =>
              setFormData({ ...formData, first_name: e.target.value })
            }
            placeholder="Full name"
          ></input>
          <input
            type="email"
            name=""
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="Email"
          ></input>
          <input
            type="text"
            name=""
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            placeholder="Username"
          ></input>
          <input
            type="password"
            name=""
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            placeholder="Password"
          ></input>
          <input
            type="password"
            name=""
            onChange={(e) =>
              setFormData({
                ...formData,
                password_confirmation: e.target.value,
              })
            }
            placeholder="Confirm Password"
          ></input>
          <div className="sign-link">
            <button
              type="submit"
              onClick={(e) => handleSubmit(e)}
              className="sign-btn"
            >
              Signup
            </button>
            <p>Already have an account?</p>
            <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
