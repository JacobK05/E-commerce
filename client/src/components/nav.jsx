import { Link } from 'react-router-dom'
import Navbar from './navbar'
import './style.css'

export default function nav() {
  return (
    <Navbar
    links={[
      <Link key={1} className="link" to="/">Home</Link>,
      <Link key={2} className="link-left" to="/shop">Shop</Link>,
      <Link key={3} className="link-left" to="/contact">Contact</Link>,
      <Link key={4} className="link-left" to="/login">Login</Link>,
    ]}
  />
  )
}
