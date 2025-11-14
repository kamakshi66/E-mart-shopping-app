

import React from 'react'

import { tvData } from '../data/tv'
const tv = () => {
    const firstFiveImages = tvData.slice(0,5)
  return (
    <>
    
      <div className='proTitle'>
       <h2>Tv</h2>
       </div>
    <div className='proSection'>
      {
      firstFiveImages.map((item) => {
        return(
          <div className='imgBox' >
                <img className = 'proImge'src={item.image} alt=" " />
           </div>
       
        ) 
})
      }
    </div>
    </>
  )
}

export default tv
