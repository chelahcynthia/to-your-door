import {createContext, useState} from 'react'

const CartContext = createContext({
items: [],
getFoodQuantity: () => {},
addOneToCart: () => {},
removeOneFromCart: () => {},
deleteFromCart: () => {},
getTotalCost: () => {}

 });
 export function CartProvider({children}){
    // these functions will be defined
    const [cartItems, setCartItems] = useState([])
    // {id:1 , quantity: 1}
    // we'll use the cartitems state to manipulate what our provider is giving to the rest of our app
    // state that is specific for our provider

    function getFoodQuantity(id){
        cartProducts.find(food => food.id === id).quantity
        // checks if food id is equal to the id we pass in
    }


    const contextValue = {
        items: cartItems,
        getFoodQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost

    }
    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
 }
// provider gives react app access to all the things in the povider