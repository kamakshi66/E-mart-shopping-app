import React from 'react'
import { Link } from 'react-router-dom'

import { useCart } from '../context/cartContext'

const Navbar = () => {

  const { cartItems} = useCart()
    
  return (
    <>
    <div className="navSection">
        <div className='title'>
        <h2>E-mart 🛍️</h2>
    </div>
    <div className="search">
       <h4>✨Happy to see you here , Explore below submenu ✨</h4>
       
      
    </div>
    <div className="user">
        <div className="user-detail">
            SignIN/SignUp
    </div>
    <Link to = '/cart' >
    <div className='cart'> Cart 
      <span>
        🛒{cartItems.length}
      </span>
    </div>
    </Link>
    </div>
    </div>

    <div className='subMenu'>
      <ul>
        <Link to='/mobiles'><li>Mobiles</li></Link>
        <Link to ='/computers'><li>Computers</li></Link>
      <Link to ='/watchs'><li>Watchs</li></Link>
        <Link to ='/books'><li>Books</li></Link>
       <Link to = '/fridge'><li>Fridge</li></Link>
        <Link to ='/tv'><li>Tv's</li></Link>
       <Link to='/speaker'><li>Speakers</li></Link>
       <Link to='/menwear'><li>MenWear</li></Link>
        <Link to ='/womenwear'><li>Womendressing</li></Link>
        <Link to='/ac'><li>Ac</li></Link>
        <Link to='/Kitchen'><li>Kitchen</li></Link>
       <Link to='/Furniture'><li>Furniture</li></Link>
        
      
      </ul>

    
    </div>
     <div class="quote-bar">
  <p>"Latest Offers! Get up to 40% off on New Mobiles 📱,Because the selfie camera deserves better lighting and better you! 📸</p>
</div>
   </>
  )
}

export default Navbar
