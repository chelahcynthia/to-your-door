import React, { useState, useEffect } from "react";
// import { getProductData } from "../productsStore";
// import "./Food.css";
// import { CartState } from "../Context";
import SingleProduct from "./SingleProduct";

function Food() {
  // const {state: {products},} = CartState();
  // console.log(products);

  const [foodData, setFoodData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/meals")
      .then((res) => res.json())
      .then((data) => setFoodData(data));
  }, []);

  // console.log(foodData)
  return (
    <div className="food">
        
        <SingleProduct foodData={foodData} />
      </div>
  );
}
export default Food;
