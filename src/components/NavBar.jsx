import React from "react";
import { NavLink } from "react-router-dom";
import {MdDeliveryDining} from 'react-icons/md'
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
        <MdDeliveryDining className="delivery-icon" size='50px'/>
          <h2>To Your Door</h2>
        </div>

        <div className="navbar-nav">
          <ul id="my-nav-links" className="nav-links">
            <li>
              <NavLink to="/">
                <i className="fa fa-fw fa-home"></i>Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart">
                <i className="fa fa-shopping-cart"></i>Cart
              </NavLink>
            </li>

            <li>
              <NavLink to="/profile">
                <i className="fa fa-fw fa-user"></i>Profile
              </NavLink>
            </li>
            <li>
              <NavLink to="/login">
                <i className="fa fa-sign-in"></i>LogIn
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
