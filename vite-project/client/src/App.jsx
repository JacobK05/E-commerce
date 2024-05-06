import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/nav'
import Body from './components/body'
import Shop from './pages/shop'
import Contact from './pages/contact'
import Login from './pages/login'
import Register from './pages/register'

import './style.css'


function App() {
  return (
   <>
     <BrowserRouter>
                <Nav />
                <hr  className='line'/>
                <Routes>
                    <Route exact path="/" element={<Body />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
                
              
            </BrowserRouter>

  
   </>
  )
}

export default App
