import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import React from "react";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
import { CartState } from "../Context";
// import './Food.css'
import './singleProduct.css'
const SingleProduct = ({ foodData }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  // console.log(cart,)
  console.log(foodData);
  return (
    <>
      <div className="food">
        {foodData.map((food) => (
          <>
            <div className="foodCard">
              
              <img src={food.img_url} alt='food-item'/>
              
              <p>{food.name}</p>
              <p>{food.price}</p>
              <p>{food.description}</p>
              <p>{food.category}</p>
              <Form>
              <Form.Group className="quantity-box">
                <div className="order-action">
                         
            
          {cart.some((p) => p.id === food.id) ? (
             <Button onClick = {()=> {
                 dispatch({
                     type: "REMOVE_FROM_CART",
                     payload: food,
                 })
              }} variant="danger">Remove from Cart</Button>
             
          ): (<Button onClick = {()=> {
             dispatch({
                 type: "ADD_TO_CART",
                 payload: food,
             })
          }}>Add to Cart</Button>)}
             </div>
           </Form.Group>
         </Form>
            </div>
          </>
        ))}
      </div>
    </>
  );
};
export default SingleProduct;
