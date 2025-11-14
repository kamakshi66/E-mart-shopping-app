import { useContext ,useState } from "react";
import { createContext } from "react";



const CartContext =  createContext()

export const CartProvider = ({children})=>{
     const  [cartItems , setCartItems] =  useState([])

     const addToCart = (item)=>{
        setCartItems([...cartItems,item])
        console.log("Added to cart:", item);
     }

     const removeFromCart =(item)=>{
        setCartItems(cartItems.filter((apple)=> apple.id !== item))
        
     }

     return(
        <CartContext.Provider value={{cartItems,addToCart,removeFromCart}}>
            {children}
        </CartContext.Provider>
     )
}
    export const useCart =()=>{
        return useContext(CartContext);
}