import React, {useState, useEffect} from "react";
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
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
import { CartState } from "../Context";

import SingleProduct from "./SingleProduct";

function Food() {
const {state: {products},} = CartState();
// console.log(products);

  const [foodData, setFoodData] = useState([])

 
  useEffect(() => {
    fetch("http://localhost:9000/meals")
    .then((res) => res.json())
    .then((data) =>
    setFoodData(data));
  }, []);

  console.log(foodData)


  return (
    <>
              <div>{foodData.map((meal)=> {
                return <SingleProduct meal = {meal} key = {meal.id} />
              })}</div>
           


</>
  );
}
export default Food;
