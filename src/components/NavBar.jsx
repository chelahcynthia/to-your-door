import React from "react";
import { NavLink } from "react-router-dom";
import {MdDeliveryDining} from 'react-icons/md'
import { Modal } from 'react-bootstrap'
import "./NavBar.css";
import {useState} from 'react'

function NavBar() {
  const [show, setShow] = useState(false);
  // for the modal and is set to false so that the modal doesnt show
  const handleClose = () => setShow(false)
  // this checks for the close event and hides the modal
  const handleShow = () => setShow(true)
  // for showing the modal
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
              <NavLink className="navlink" to="/">
                <i className="fa fa-fw fa-home"></i>Home
              </NavLink>
            </li>
            <li>
              <NavLink className="navlink" onClick={handleShow}>
                <i className="fa fa-shopping-cart"></i>Cart
               
              </NavLink>
            </li>
            {/* this is the modal for showing the cart items */}
                  <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Shopping Cart</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <h1>This is the modal body</h1>
                  </Modal.Body>
                </Modal>

            <li>
              <NavLink className="navlink" to="/profile">
                <i className="fa fa-fw fa-user"></i>Profile
              </NavLink>
            </li>
            <li>
              <NavLink className="navlink" to="/login">
                <i className="fa fa-sign-in"></i>LogIn
              </NavLink>
            </li>
            <button className="cart-button">cart 0 items </button>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
