import React, {useState, useEffect} from 'react'
import {CartState} from "../Context"
import {ListGroup, Image} from "react-bootstrap"
import Button from "react-bootstrap/Button";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from "react-bootstrap/Form";
const Cart = () => {
const {state: { cart}, dispatch,} = CartState();
const [total, setTotal] = useState();
useEffect(() => {
 setTotal(cart.reduce((acc, curr) => acc + Number(curr.price)*curr.qty, 0));
},[cart])
  return (
    <div className="home">
      <div className="productContainer">
        {cart.map((prod) => (
          <ListGroup.Item key={prod.id}>
         <Row>
          <Col md={2}>
            <Image src={prod.path} alt={prod.mealName} fluid rounded />
          </Col>
          <Col md={2} >
            <span>{prod.mealName}</span>
          </Col>
          <Col md={2} >
            {prod.price}
          </Col>
          <Col>
          <Form.Control type="number" placeholder="QTY" value={prod.qty}
          onChange={(e) => dispatch({type: "CHANGE_CART_QTY", payload:{
            id:prod.id,
            qty: e.target.value,
          }})}>
          </Form.Control>
          </Col>
          <Col>
          <Button type="button" variant="light" onClick={() => dispatch({
            type: "REMOVE_FROM_CART",
            payload:prod,
          })}>Remove</Button>
          </Col>
         </Row>
          </ListGroup.Item>
        ))}
      </div>
      <div className='filters summary'>
        <span className="title">Subtotal({cart.length}) items</span>
        <span style={{fontWeight: 700, fontSize: 20}}>Total: Ksh {total}</span>
        {/* code for the checkout and delivery */}

        <form className="delivaryInfo">
        <label>
          Please Provide a destination
          <input type="text" />
        </label>
        <input type="submit" value="Submit" />
      </form>
        <Button type="button" disabled={cart.length === 0}>Proceed to Checkout</Button>
      </div>
    </div>
  )
}
export default Cart;