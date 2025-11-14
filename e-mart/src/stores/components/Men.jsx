import React from 'react'

import { menData } from '../data/men'

const Men = () => {
    const firstFiveImages = menData.slice(0,5)
  return (
   <div>
      <>
     <div className='proTitle'>
       <h2>MenWear</h2>
       </div>
    <div
    className='proSection'>
      {
        firstFiveImages.map((item) => {
            return(
                <div className='imgBox' >
                         <img className='proImge'src={item.image} alt=' '/>
             </div>
            )
        })
    }
    </div>
      </>
    </div>
  )
}

export default Men
