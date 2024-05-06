import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

export default function body() {
  return (
    
    <div className='body-container'>
      <h1 className='body-h1'> Welcome </h1>
      <p className='body-p'> This is a e-commerce store made with react! </p>
      <Link to="/shop">
      <button onClick  className='body-btn'> Shop</button>
      </Link>
    </div>
  )
}
