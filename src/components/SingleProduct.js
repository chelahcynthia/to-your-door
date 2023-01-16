import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import React from "react"

// import { getProductData } from "../productsStore";

// import { CartContext } from "../CartContext"
// import { useContext } from "react";
import { CardGroup } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { CartState } from "../Context";
const SingleProduct = ({prod}) => {
    const {state: {cart}, dispatch, } = CartState();
    console.log(cart)
    return (
        <Row xs={1} md={2} className="g-4">
     
      
        <Col key = {prod.id}>
          <Card className="food-card">
        <Card.Img src={prod.path} />
        <Card.Body>
        <Card.ImgOverlay>
          <Card.Title className="title-color">{prod.mealName}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted subtitle-color">Price: {prod.price}</Card.Subtitle>
          
          <Card.Text className="text-color">
           {prod.description}
          </Card.Text>
          <Card.Text className="food-cat">{prod.category}</Card.Text>
              <Form>
              <Form.Group className="quantity-box">
                <div className="order-action">
                <Form.Control type="number" placeholder="QTY"></Form.Control>
                
                {/* <Button variant="secondary" >ADD TO CART</Button> */}
             {cart.some((p) => p.id === prod.id) ? (
                <Button onClick = {()=> {
                    dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: prod,
                    })
                 }} variant="danger">Remove from Cart</Button>
                
             ): (<Button onClick = {()=> {
                dispatch({
                    type: "ADD_TO_CART",
                    payload: prod,
                })
             }}>Add to Cart</Button>)}
                </div>
              </Form.Group>
            </Form>
          </Card.ImgOverlay>
        </Card.Body>
      </Card>
     <Form>
      
     </Form>
    </Col>
    
          </Row>
    )
}
export default SingleProduct;