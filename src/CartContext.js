import {createContext, useState} from 'react'
import { productsArray, getProductData } from './productsStore';




export const CartContext = createContext({
items: [],
getProductQuantity: () => {},
addOneToCart: () => {},
removeOneFromCart: () => {},
deleteFromCart: () => {},
getTotalCost: () => {}

 });


//  provider giver your react app access to all the things in your context

 export function CartProvider({children}){
    // these functions will be defined
    const [cartProducts, setcartProducts] = useState([])
    // {id:1 , quantity: 1}
    // we'll use the cartitems state to manipulate what our provider is giving to the rest of our app
    // state that is specific for our provider
                                                                    
    function getProductQuantity(id){
        const quantity = cartProducts.find(product => product.id === id)?.quantity
        // checks if food id is equal to the id we pass in and gets its quantity but only if the food id is not undefined
        if (quantity === undefined){
            return 0;
        }
        return quantity
    }

    function addOneToCart(id){
        const quantity = getProductQuantity(id)

        // if there's zero or one elements
        if(quantity === 0) { //product is not in cart
            setcartProducts(
                [

                    ...cartProducts,
                    {
                        id:id,
                        quantity: 1
                    }
                
                ]
            )
          //concats what
        } else { //product is in cart
            setcartProducts(
            cartProducts.map(
            product =>
            product.id === id                                                       //if condition
            ?{...product, quantity: product.quantity + 1}                           //if statement is true
            :product                                                                    //if statement is false
                    )
                )
            }
    }
// this removes an item from the cart
    function removeOneFromCart(id){
        const quantity = getProductQuantity(id);
        if(quantity === 1) {
            deleteFromCart(id)
        }
        else{
            setcartProducts(
                cartProducts.map(
                    product =>
                    product.id === id                                                       //if condition
                    ?{...product, quantity: product.quantity - 1}                           //if statement is true
                    :product                                                                    //if statement is false
                            )
            )
        }
    }


    // delete from cart
    function deleteFromCart(id){
    setcartProducts(
        cartProducts => 
        cartProducts.filter(currentProduct => {
            return currentProduct.id != id
        })

        )
    
}

// this gets the total cost of all items in the cart
function getTotalCost(){
    let totalCost = 0
    cartProducts.map((cartItem) => {
        const productData = getProductData(cartItem.id)
        totalCost += (productData.price * cartItem.quantity)
    });
    return totalCost

}

    const contextValue = {
        items: cartProducts,
        getProductQuantity,
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
 export default CartProvider
// provider gives react app access to all the things in the povider