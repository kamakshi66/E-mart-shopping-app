

import React from 'react'

import { useCart } from './context/cartContext'
import Navbar from './components/Navbar'

const UserCart = () => {

    const {cartItems,addToCart,removeFromCart} = useCart()

  return (
    <div>
      <Navbar/>
       <div className="cart-container">
      <h2>Your Cart 🛒</h2>

    


   {cartItems.map((item)=>{
     return(
        <div className='cart-section'>
            <div className='cart-img'>
                <img src={item.image} alt=" "/>
                </div>
                <div className='cart-details'>
                    <h3>
                        {item.product}
                    </h3>
                    <h2>
                        {item.price}
                    </h2>
                    <h3>
                        {item.model}
                    </h3>
               
            </div>
            <button className='remove-btn'onClick={()=>removeFromCart(item.id)}>Remove </button>
            </div>
             
   
     ) 
    
   })}
  
    </div>
    
    </div>

  )
}

export default UserCart
