import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <h2>To Your Door</h2>
        </div>

        <div className="navbar-nav">
          <ul id="my-nav-links" className="nav-links">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/cart">Cart</NavLink>
            </li>

            <li>
              <NavLink to="/login">LogIn</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
