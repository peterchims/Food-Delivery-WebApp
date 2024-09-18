import React, { useState, useContext } from 'react';
import './navbar.css';
import { assets } from '../../assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../ExploreMenu/context/storeContent';


const Nav = ({setShowLogin}) => {
  
  const [menu,setMenu] = useState("home");

  const {getTotalCartAmount} = useContext(StoreContext);


  return (
    <div className='navbar'>
  <Link to='/'> <img src={assets.logo} alt="" className='logo' /></Link>
   <ul className="navbar-menu">
    <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}> Home </Link>
    <a href="#explore-menu" onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}> Menu </a>
    <a href="#app-download" onClick={()=>setMenu("Mobile-App")} className={menu==="Mobile-App"?"active":""}> Mobile-App </a>
    <a href="#footer" onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}> Contact Us </a>
   </ul> 
   <div className="navbar-right">
    <img src={assets.search_icon} alt="" />
    <div className="navbar-search-icon">
     <Link to='/Cart'> <img src={assets.basket_icon} alt="" /> </Link>
      <div className={getTotalCartAmount()===0?"":"dot"}></div>
    </div>
    <button onClick={()=>setShowLogin(true)}> Sign In</button>
   </div>
    </div>
  )
}

export default Nav;
 