import {createContext, useContext, useReducer} from 'react'
import { products } from './productsStore';
import React from "react";
import { cartReducer } from './Reducers';
const Cart = createContext();
const Context = ({children}) => {
const [state, dispatch] = useReducer (cartReducer, {
    products: products,
    cart:[]
})
return <Cart.Provider value = {{state, dispatch}}> {children}</Cart.Provider>
}




//  provider giver your react app access to all the things in your context

 export default Context;
 export const CartState = () => {
    return useContext(Cart)
 }
// provider gives react app access to all the things in the povider