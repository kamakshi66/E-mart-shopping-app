import React from 'react'

import { mobileData } from '../data/mobiles'
 
const Mobile = () => {
  const firstFiveImages = mobileData.slice(0,5)
  

    return (
      <>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
    <div className='proTitle'>
       <h2>Mobiles</h2>
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
    </div>
    </>  
    
  )

}
export default Mobile 
