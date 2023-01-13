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
        cartProducts.find(food => food.id === id)?.quantity
        // checks if food id is equal to the id we pass in and gets its quantity but only if the food id is not undefined
        if (quantity === undefined){
            return 0;
        }
        return quantity
    }

    function addOneToCart(id){
        const quantity = getFoodQuantity(id)

        // if there's zero or one elements
        if(quantity === 0) { //product is not in cart
            setCartItems(
                [

                    ...cartItems,
                    {
                        id:id,
                        quantity: 1
                    }
                
                ]
            )
          //concats what
        } else { //product is in cart
            setCartItems(
            cartItems.map(
            food =>
            food.id === id 
            ?{...food, quantity: food.quantity + 1}
            :food
                    )
                )
            }
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