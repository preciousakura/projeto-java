import React from 'react'
import './style.css'

export function Quadrado({ nome, number }) {
    return(
    <>
      <div className='quadrado'>
          <h1>{number}</h1>
          <p>{nome}</p>
      </div>
    </>
    )
}