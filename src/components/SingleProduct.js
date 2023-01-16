import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import React from "react"
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { CartState } from "../Context";


const SingleProduct = ({meal}) => {
    const {state: {cart}, dispatch, } = CartState();
    console.log(cart)
    return (
        <Row xs={1} md={2} className="g-4">
     
      
        <Col key = {meal.id}>
          <Card className="food-card">
        <Card.Img src={meal.path} />
        <Card.Body>
        <Card.ImgOverlay>
          <Card.Title className="title-color">{meal.mealName}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted subtitle-color">Price: {meal.price}</Card.Subtitle>
          
          <Card.Text className="text-color">
           {meal.description}
          </Card.Text>
          <Card.Text className="food-cat">{meal.category}</Card.Text>
              <Form>
              <Form.Group className="quantity-box">
                <div className="order-action">
                <Form.Control type="number" placeholder="QTY"></Form.Control>
                
                <Button variant="secondary" >ADD TO CART</Button>
             {cart.some((p) => p.id === meal.id) ? (
                <Button onClick = {()=> {
                    dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: meal,
                    })
                 }} variant="danger">Remove from Cart</Button>
                
             ): (<Button disabled={!meal.inStock} onClick = {()=> {
                dispatch({
                    type: "ADD_TO_CART",
                    payload: meal,
                })
             }}>{!meal.inStock ? "Out of Stock": "Add to Cart"}</Button>)}
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