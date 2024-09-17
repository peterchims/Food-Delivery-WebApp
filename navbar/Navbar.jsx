import React, { useState } from 'react';
import './navbar.css';
import { assets } from '../src/assets'


const Nav = () => {
  
  const [menu,setMenu] = useState("home");


  return (
    <div className='navbar'>
   <img src={assets.logo} alt="" className='logo' />
   <ul className="navbar-menu">
    <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}> Home </li>
    <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}> Menu </li>
    <li onClick={()=>setMenu("Mobile-App")} className={menu==="Mobile-App"?"active":""}> Mobile-App </li>
    <li onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}> Contact Us </li>
   </ul> 
   <div className="navbar-right">
    <img src={assets.search_icon} alt="" />
    <div className="navbar-search-icon">
      <img src={assets.basket_icon} alt="" /> 
      <div className="dot"></div>
    </div>
    <button> Sign In</button>
   </div>
    </div>
  )
}

export default Nav;
 