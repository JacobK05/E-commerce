import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
export default function shop2() {
  return (
    <>
    <div className='card-container'> 
    <div className="card">
    <img />
    <h1>Collared shirt</h1>
    <p className="price">$19.99</p>
    <p>Some text about the jeans..</p>
    <p><button className='btn'>Add to Cart</button></p>
  </div>
    <div className="card">
    <img />
    <h1>Collared shirt</h1>
    <p className="price">$19.99</p>
    <p>Some text about the jeans..</p>
    <p><button className='btn'>Add to Cart</button></p>
  </div>
    <div className="card">
    <img />
    <h1>Collared shirt</h1>
    <p className="price">$19.99</p>
    <p>Some text about the jeans..</p>
    <p><button className='btn'>Add to Cart</button></p>
  </div>
    <div className="card">
    <img />
    <h1>Collared shirt</h1>
    <p className="price">$19.99</p>
    <p>Some text about the jeans..</p>
    <p><button className='btn'>Add to Cart</button></p>
  </div>
  </div>
  <div className='bottom-container'>
  <div className="card">
    <img />
    <h1>Collared shirt</h1>
    <p className="price">$19.99</p>
    <p>Some text about the jeans..</p>
    <p><button className='btn'>Add to Cart</button></p>
  </div>

  <div className="card">
    <img />
    <h1>Collared shirt</h1>
    <p className="price">$19.99</p>
    <p>Some text about the jeans..</p>
    <p><button className='btn'>Add to Cart</button></p>
  </div>
  <div className="card">
    <img />
    <h1>Collared shirt</h1>
    <p className="price">$19.99</p>
    <p>Some text about the jeans..</p>
    <p><button className='btn'>Add to Cart</button></p>
  </div>
  <div className="card">
    <img />
    <h1>Collared shirt</h1>
    <p className="price">$19.99</p>
    <p>Some text about the jeans..</p>
    <p><button className='btn'>Add to Cart</button></p>
  </div>
  </div>
  <div className='page-btn'>
    <Link to="/shop" >
    <button className='pre-btn' style={{ cursor: 'pointer' }} > Previous </button>
    
    </Link>
    <Link  to="/shop2">
    <button className='next-btn'  style={{ cursor: 'pointer' }}> Next </button>
    
    </Link>

  </div>
  </>
  )
}
