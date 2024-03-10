import React, { useState } from 'react'
import './Counter.css'
export default function Counter() {
      
    //write your logic here

  return (
    <div className="counter">
            <button className="counter--minus">–</button>
            <div className="counter--count">
                <h1>{0}</h1>
            </div>
            <button className="counter--plus">+</button>
        </div>
  )
}
