import React from "react";
import { NavLink } from "react-router-dom";
import {MdDeliveryDining} from 'react-icons/md'
import { Modal, Badge } from 'react-bootstrap'
import "./NavBar.css";
import Cart from "./Cart";
import {useState} from 'react'
import { cartReducer } from "../Reducers";
import { CartState } from "../Context";
import { Link} from "react-router-dom"
import Button from "react-bootstrap/Button";
//  import {AiFillDelete} from "react-icons/ai"
function NavBar() {
  const [show, setShow] = useState(false);
  // for the modal and is set to false so that the modal doesnt show
  const handleClose = () => setShow(false)
  // this checks for the close event and hides the modal
  const handleShow = () => setShow(true)
 const {state: {cart},dispatch } = CartState();

  // for showing the modal
  return (

    <>
      <nav className="navbar">
        <div className="navbar-brand">
        <MdDeliveryDining className="delivery-icon" size='30px'/>
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
              <NavLink className="navlink" to="/profile">
                <i className="fa fa-fw fa-user"></i>Profile
                
              </NavLink>
            </li>
            <li>
              <NavLink className="navlink" to="/login">
                <i className="fa fa-sign-in"></i> My Account
              </NavLink>
            </li>
            <li>
              <NavLink className="navlink" onClick={handleShow}>
                <i className="fa fa-shopping-cart"></i>&nbsp;Cart &nbsp;
              
                
              <Badge>{cart.length}</Badge>
              </NavLink>
              <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Shopping Cart</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    {/* <h1>This is the modal body</h1> */}
                    {cart.length > 0 ?(
                      <>
                      {cart.map(food => (
                        <span className = "cartitem" key="food.key">
                          <img className="cartItemImg" src={food.img_url} alt={food.foodName} />
                          <div className ="cartItemDetail">
                            <span>{food.foodName} </span>
                            <span>Ksh {food.price}</span>
                          </div>
                        
                          <Button fontSize = "20px" style={{cursor:"pointer", margin:".75rem"}} onClick={()=>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload:food,
                          })}>Remove</Button>
                        </span>

                      ))
                      }
                      <Link to="/cart">
                        <Button style={{width: "95%", margin: "0 10px"}}>Go to Cart</Button>
                      </Link>
                      </>
                    ): (
                      <span>Cart Is Empty!</span>
                    )}
                  </Modal.Body>
                </Modal>
            </li>
            {/* this is the modal for showing the cart items */}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
