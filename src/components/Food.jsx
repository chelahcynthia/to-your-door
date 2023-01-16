import React, {useState} from "react";
import { Link} from "react-router-dom"
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
 import {products } from "../productsStore";
 import Cart from "./Cart";
// import { getProductData } from "../productsStore";
import "./Food.css";
// import { CartContext } from "../CartContext"
// import { useContext } from "react";
import { CardGroup } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { CartState } from "../Context";

import SingleProduct from "./SingleProduct";

function Food() {
const {state: {products},} = CartState();
console.log(products);
  // const {products} = data;



  // const onAdd = (product) => {
  //   const exist = cartItems.find((x) => x.id === product.id);
  //   if (exist) {
  //     setCartItems(
  //       cartItems.map((x) =>
  //       x.id === product.id ? {...exist, qty: exist.qty + 1} : x
  //       )
  //     );
      
  //   } else {
  //     setCartItems([...cartItems, {...product, qty: 1}]);
  //   }
  // }
  // const [cartItems, setCartItems] = useState([])
//   const [cartProducts, setcartProducts] = useState([])
//   const product = props.product;

// const productQuantity = getProductQuantity(props.product.id)
//   // {id:1 , quantity: 1}
//   // we'll use the cartitems state to manipulate what our provider is giving to the rest of our app
//   // state that is specific for our provider
                                                                  
//   function getProductQuantity(id){
//       const quantity = cartProducts.find(product => product.id === id)?.quantity
//       // checks if food id is equal to the id we pass in and gets its quantity but only if the food id is not undefined
//       if (quantity === undefined){
//           return 0;
//       }
//       return quantity
//   }

//   function addOneToCart(id){
//       const quantity = getProductQuantity(id)

//       // if there's zero or one elements
//       if(quantity === 0) { //product is not in cart
//           setcartProducts(
//               [

//                   ...cartProducts,
//                   {
//                       id:id,
//                       quantity: 1
//                   }
              
//               ]
//           )
//         //concats what
//       } else { //product is in cart
//           setcartProducts(
//           cartProducts.map(
//           product =>
//           product.id === id                                                       //if condition
//           ?{...product, quantity: product.quantity + 1}                           //if statement is true
//           :product                                                                    //if statement is false
//                   )
//               )
//           }
//   }
// // this removes an item from the cart
//   function removeOneFromCart(id){
//       const quantity = getProductQuantity(id);
//       if(quantity === 1) {
//           deleteFromCart(id)
//       }
//       else{
//           setcartProducts(
//               cartProducts.map(
//                   product =>
//                   product.id === id                                                       //if condition
//                   ?{...product, quantity: product.quantity - 1}                           //if statement is true
//                   :product                                                                    //if statement is false
//                           )
//           )
//       }
//   }


//   // delete from cart
//   function deleteFromCart(id){
//   setcartProducts(
//       cartProducts => 
//       cartProducts.filter(currentProduct => {
//           return currentProduct.id != id
//       })

//       )
  
// }

// // this gets the total cost of all items in the cart
// function getTotalCost(){
//   let totalCost = 0
//   cartProducts.map((cartItem) => {
//       const productData = getProductData(cartItem.id)
//       totalCost += (productData.price * cartItem.quantity)
//   });
//   return totalCost

// }

//   const contextValue = {
//       items: cartProducts,
//       getProductQuantity,
//       addOneToCart,
//       removeOneFromCart,
//       deleteFromCart,
//       getTotalCost

//   }
//  const { mealName, price, path, description} = props.data



  // const [foodData, setFoodData] = useState([])

 
  // const fetchData = () => {
  //   fetch("http://localhost:8000/foods")
  //     .then((res) => res.json())
  //     .then((data) =>
  //     setFoodData(data));
  // };
 
  // useEffect(() => {
  //   fetchData();
  // }, []);
  return (
    <>

    {/* <Row xs={1} md={2} className="g-4">
            {products.map((product) =>
          
            <Col key = {product.id} product = {product}>
              <Card className="food-card">
            <Card.Img src={product.path} />
            <Card.Body>
            <Card.ImgOverlay>
              <Card.Title className="title-color">{product.mealName}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted subtitle-color">Price: {product.price}</Card.Subtitle>
              
              <Card.Text className="text-color">
               {product.description}
              </Card.Text>
              <Card.Text className="food-cat">{product.category}</Card.Text>
                  <Form>
                  <Form.Group className="quantity-box">
                    <div className="order-action">
                    <Form.Control type="number" placeholder="QTY"></Form.Control>
                    
                    <Button variant="secondary" >ADD TO CART</Button>
                 
                    </div>
                  </Form.Group>
                </Form>
              </Card.ImgOverlay>
            </Card.Body>
          </Card>
         <Form>
          
         </Form>
        </Col>
        )}
              </Row> */}
              <div>{products.map((prod)=> {
                return <SingleProduct prod = {prod} key = {prod.id} />
              })}</div>
           


</>
  );
}
export default Food;