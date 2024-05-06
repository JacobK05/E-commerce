import React from 'react'
import './style.css'
export default function contact() {
  return (
    <>
    <div className='contact-container'> 
    <input className='name-input' type="text" placeholder='Name'/> 
    <input className='email-input' type="text" placeholder='Email'/> 
    <input className='message-input' type="text" placeholder='Message'/> 
    <button className='contact-btn'> Submit </button>
    </div>
    </>
  )
}
