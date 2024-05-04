import React, { useState } from 'react'
import "./navbar.css"
import logo from '../assets/logo.png'
import cartIcon from "../assets/cart_icon.png"
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [menu , setMenu] = useState("Home")
  return (
    <div className='navbar'>
<div className="nav-logo">
  <img src={logo} alt="" />
  <h3>SHOPPY</h3>
</div>
<ul className='nav-menu' >
  <li onClick={() => {setMenu("Home")}}> <Link style={{textDecoration:"none" , color:"black"}} to="/"> Home </Link> {menu==="Home"?<hr/>:<></>}</li>
  <li onClick={() => {setMenu("mens")}}><Link style={{textDecoration:"none" , color:"black"}}  to="/mens"> men </Link> {menu==="mens"?<hr/>:<></>} </li>
  <li onClick={() => {setMenu("womens")}}><Link style={{textDecoration:"none" , color:"black"}}  to="/womens"> womens </Link>{menu ==="womens"?<hr/>:<></>}</li>
  <li onClick={() => {setMenu("kids")}}><Link style={{textDecoration:"none" , color:"black"}}  to="/kids"> kids </Link>{menu==="kids"?<hr/>:<></>}</li>
</ul>

<div className="nav-login-cart">
  <button><Link style={{textDecoration:"none" , color:"black"}}  to="/login"> Login </Link></button>
  <Link to="/"> <img src={cartIcon} alt="" /> </Link> 
  <div className="nav-cart-counter">0</div>
</div>
    </div>
  )
}

export default Navbar
