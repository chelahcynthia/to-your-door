import React, {useState, useEffect} from 'react'
import {CartState} from "../Context"
import {ListGroup, Image} from "react-bootstrap"
import Button from "react-bootstrap/Button";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from "react-bootstrap/Form";
const Cart = () => {

const {state: { cart}, dispatch,} = CartState();
const [total, setTotal] = useState("");
const [num, setNum] = useState(0);
const [show, setShow] = useState(false)
// function for calculating random number
function randomNumberInRange(min, max) {
  // 👇️ get number between min (inclusive) and max (inclusive)
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const handleClick = () => {
  setNum(randomNumberInRange(1, 50));
};


useEffect(() => {
 setTotal(cart.reduce((acc, curr) => acc + Number(curr.price)*curr.qty, 0));
},[cart])
  return (
    <div className="home">
      <div className="productContainer">
      
        {cart.map((food) => (
          <ListGroup.Item key={food.id}>
         <Row>
          <Col md={2}>
            <Image src={food.path} alt={food.mealName} fluid rounded />
          </Col>
          <Col md={2} >
            <span>{food.mealName}</span>
          </Col>
          <Col md={2} >
            {food.price}
          </Col>
          <Col>
         
          <Form.Control type="number" placeholder="QTY" value={food.qty}
          onChange={(e) => dispatch({type: "CHANGE_CART_QTY", payload:{
            id:food.id,
            qty: e.target.value,
          }})}>
         
          </Form.Control>
          </Col>
          <Col>
          <Button type="button" variant="light" onClick={() => dispatch({
            type: "REMOVE_FROM_CART",
            payload:food,
          })}>Remove</Button>
          </Col>
         </Row>
          </ListGroup.Item>
        ))}
     
      </div>
      <div className='filters summary'>
        <span className="title">Subtotal({cart.length}) items</span>
        <span style={{fontWeight: 700, fontSize: 20}}>Total: Ksh {total}</span>
     
       {show && <h2>Your order will arrive in {num} minutes.</h2>}
       <Button onClick={()=> setShow(!show)}>Add Delivery?</Button> 
        <Button type="button" onClick={handleClick} disabled={cart.length === 0}>Proceed to Checkout</Button>
      </div>
    </div>
  )
}
export default Cart;