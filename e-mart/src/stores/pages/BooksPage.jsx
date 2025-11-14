
import React, { useState } from 'react'

import { booksData } from '../data/books'

import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'


const BooksPage = () => {
 const [selectedProduct ,setSelectecProduct] = useState([])

  const companyHandler= (mango)=>{
    if(selectedProduct.includes(mango)){
      setSelectecProduct(selectedProduct.filter(item => item !== mango))
    }else{
      setSelectecProduct([...selectedProduct,mango])
    }
  }
   const filteredProduct =selectedProduct.length ===0 ?
   booksData : booksData.filter((orange)=>selectedProduct.includes(orange.author))
  return (
   <>
    <Navbar />
      <div className="fullPage">
        <div className="pro-selected">
        {booksData.map((phone) => {
          return(
            <div className='pro-input'>
              <label>
                <input type ="checkbox" 
                checked = {selectedProduct.includes(phone.author)}
                onChange={() => companyHandler(phone.author)}
                />
                {phone.author}
              </label>
              </div>
          )
        })}
      </div>

    <div className='pageSection'>
      {filteredProduct.map((item)=>{
        return(
          <div>

            <Link to = {`/books/${item.id}`}>
              <div className='pageImg'>
                  <img src={item.image} alt=""

                  />
              </div>
              </Link>            

            <div className="proModel"> 
            {item.author},{item.title}
            </div>
            </div>
        
        )
      })}
    </div>
    </div>
     
    </>
  )
}

export default BooksPage