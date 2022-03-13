import React, { useState } from 'react'

export default function Quantity() {
    const[counter,setCounter]=useState(1)
    const increment=()=>{
        setCounter(counter+1)
    }
    
    const decrement=()=>{
        setCounter(counter-1)
    }
  return (
    <div>
    <p>
    Set the quantity
   </p>
  <div className="quantity-input">
    <button className="quantity-input__modifier quantity-input__modifier--left" onClick={decrement} >
      &mdash;
    </button>
    <input className="quantity-input__screen" type="text" value={counter}  readonly />
    <button className="quantity-input__modifier quantity-input__modifier--right" onClick={increment} >
      &#xff0b;
    </button>  
  </div>  
  </div>
  )
}
