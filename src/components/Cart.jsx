import React, {useState, useEffect} from 'react'
import {CartState} from "../Context"
import {ListGroup} from "react-bootstrap"
import Button from "react-bootstrap/Button";
const Cart = () => {

const {state: { cart}, dispatch,} = CartState();
const [total, setTotal] = useState();
useEffect(() => {
 setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
},[cart])
  return (
    <div className="home">
      <div className="productContainer">
      <ListGroup>
        {cart.map((prod) => (
          <span>{prod.mealName}</span>
        ))}
      </ListGroup>
      </div>
      <div className='filters summary'>
        <span className="title">Subtotal({cart.length}) items</span>
        <span style={{fontWeight: 700, fontSize: 20}}>Total: Ksh {total}</span>
        <Button type="button" disabled={cart.length === 0}>Proceed to Checkout</Button>
      </div>
    </div>
  )
}
export default Cart;