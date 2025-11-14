import React from 'react'


import { womanData } from '../data/woman'
const Woman = () => {
    const firstFiveImages = womanData.slice(0,5)
  return (
    <div>
        <>
        <div className='proTitle'>
       <h2>Womenwear</h2>
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

export default Woman
