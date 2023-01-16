import React from "react";
import "./Food.css";
import { CartState } from "../Context";
import SingleProduct from "./SingleProduct";

function Food() {
const {state: {products},} = CartState();
console.log(products);
  return (
            <>
              <div>{products.map((prod)=> {
                return <SingleProduct prod = {prod} key = {prod.id} />
              })}</div>
            </>
          );
}
export default Food;