import React, { useState, useEffect } from "react";
import "./Cart.css";
import { CartState } from "../Context";
import {  Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import PayForm from "./PayForm";
import { Modal } from "bootstrap";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [total, setTotal] = useState("");
  const [num, setNum] = useState(0);
  const [show, setShow] = useState(false);
  const navigate = useNavigate()
  // function for calculating random number
  function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleClick = () => {
    navigate("/payment")
    setNum(randomNumberInRange(1, 50));
  };

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);
  return (
    <div className="checkout">
      <div className="productContainer">
        {cart.map((food) => (
          <div key={food.id}>
            <div className="checkout_row">
              <div>
                <Image src={food.img_url} alt={food.mealName} className="checkout_image" />
              </div>
              <div className="product-checkout-name">
                <span>{food.mealName}</span>
              </div>
              <div className="product-checkout-price">Kshs. {food.price}</div>
              <div className="product-checkout-alter">
                <Form.Control
                  type="number"
                  placeholder="QTY"
                  value={food.qty}
                  onChange={(e) =>
                    dispatch({
                      type: "CHANGE_CART_QTY",
                      payload: {
                        id: food.id,
                        qty: e.target.value,
                      },
                    })
                  }
                ></Form.Control>
              </div>
              <div className="product-checkout-button">
                <button
                  type="button"
                  className="remove-button"
                  variant="light"
                  onClick={() =>
                    dispatch({
                      type: "REMOVE_FROM_CART",
                      payload: food,
                    })
                  }
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="filters-summary">
        <div className="checkout-total">
          <span className="title">Subtotal({cart.length}) items</span>
          <span style={{ fontWeight: 700, fontSize: 20 }}>
            Total: Ksh {total}
          </span>
        </div>
<div className="checkout-section">
  
          {show && <span className="delivery-time">Your order will arrive in {num} minutes.</span>}
          <div className="checkout-buttons">
            <Button className="Add-btn" onClick={() => setShow(!show)}>
              Add Delivery?
            </Button>
            <Button
              className="Checkout-btn"
              type="button"
              onClick={handleClick}
              disabled={cart.length === 0}
            >
              Proceed to Checkout
            </Button>
          </div>

          
</div>
      </div>
    </div>
  );
};
export default Cart;