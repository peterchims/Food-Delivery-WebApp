import React from 'react'
import './footer.css'
import { assets } from '../../assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
<img src={assets.logo} />
<p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ab unde quae veniam possimus mollitia perferendis praesentium dolore sit commodi, et temporibus minima 
    quasi perspiciatis eveniet laborum quis asperiores. Distinctio.</p>
       <div className="footer-social-icons">
        <img src={assets.facebook_icon} alt='' />
        <img src={assets.twitter_icon} alt='' />
        <img src={assets.linkedln_icon} alt='' />
       </div>
        </div>
        <div className="footer-content-center">
<h2>COMPANY</h2>
<ul>
    <li>Home</li>
    <li> About Us</li>
    <li> Delivery</li>
    <li> Privacy Policy</li>
</ul>
        </div>
        <div className="footer-content-right">
<h2>GET IN TOUCH</h2>
<ul>
    <li>+234 818346382</li>
    <li>peter4tech@gmail.com</li>
</ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright"> Copyright 2024 &copy; Peter$Tech - All Rights Reserved.</p>
    </div>
  )
}

export default Footer
