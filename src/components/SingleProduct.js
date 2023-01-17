import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import React from "react"
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { CartState } from "../Context";


const SingleProduct = ({foodData}) => {
    const {state: {cart}, dispatch, } = CartState();
    // console.log(cart,)
    console.log(foodData);
    return (
      <>
     
    
    <div className="food">
           
       {foodData.map((food) => (
        <>        
        {/* <h1>{food.name}</h1>;     */}
        <Row xs={5} md={2} className="g-4">
     
      
     <Col key = {food.id}>
       <Card className="food-card">
     <Card.Img src={food.img_url} />
     <Card.Body>
     <Card.ImgOverlay>
       <Card.Title className="title-color">{food.foodName}</Card.Title>
       <Card.Subtitle className="mb-2 text-muted subtitle-color">Price: {food.price}</Card.Subtitle>
       
       <Card.Text className="text-color">
        {food.description}
       </Card.Text>
       <Card.Text className="food-cat">{food.category}</Card.Text>
           <Form>
           <Form.Group className="quantity-box">
             <div className="order-action">
             <Form.Control type="number" placeholder="QTY"></Form.Control>
             
             <Button variant="secondary" >ADD TO CART</Button>
          {cart.some((p) => p.id === food.id) ? (
             <Button onClick = {()=> {
                 dispatch({
                     type: "REMOVE_FROM_CART",
                     payload: food,
                 })
              }} variant="danger">Remove from Cart</Button>
             
          ): (<Button disabled={!food.inStock} onClick = {()=> {
             dispatch({
                 type: "ADD_TO_CART",
                 payload: food,
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
       
        </>
      ))}
      
    </div>
</>
    
    )
}
export default SingleProduct;