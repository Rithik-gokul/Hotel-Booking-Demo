import React from 'react'
import star from "./star.jpg"

export default function Hotels(p) {
  const styles ={
    color: p.property === "House" ? "green" : "blue"
  }
  return (
    <div>
        <div className="property bg-white w-72 flex-col my-6 ">
                <img src={p.imageUrl} alt="hotel" className='max-h-32 w-96 translate' />
                <hr />
                <div className='flex justify-between p-6 items-center '>
                <div>
                    <h2 className='mt-0.25'><span className='price font-bold text-xl'>${p.price}</span>/month</h2>
                    <h2 className='mt-0.25 font-bold text-base'>{p.location}</h2>
                    <h2 style={styles} className='mt-0.25 text-sm font-semibold'>{p.property}</h2>
                </div>
                <span className='flex price'>
                <img src={star} alt="star" width="20px" />
                <p>{p.rating} </p>
                </span>
                </div> 
            </div> 
  </div>
  )
}
