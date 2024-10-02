import React from 'react'
import './Footer.css'
import Logo from '../../assets/kamillogo.png'
import facebook from '../../assets/facebook_icon.png'
import x from '../../assets/twitter_icon.png'
import instagram from '../../assets/instagram.png'
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-content">
          <div className="footer-content-left">
              <img src={Logo} alt="" className='logo' />
              <p>When building a navigation menu, such as a breadcrumb or a set of tabs where you'd like to show which of them is currently selected
                It provides useful context for assistive technology like screen readers</p>
                <div className="footer-social-icons">
                  <img src={facebook} alt="" />
                  <img src={x} alt="" />
                  <img src={instagram}alt="" />
                </div>
          </div>
          <div className="footer-content-center">
            <h2>K.E.M.S</h2>
            <ul>
            <li><Link to='Home' smooth={true} offset={0} duration={500}>
              Home</Link></li>
            <li><Link to='programs' smooth={true} offset={-260} duration={500}>
              Programs</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>
              About Us</Link></li>
            <li><Link to='messages' smooth={true} offset={-260} duration={500}>
              Message</Link></li>
            <li><Link to='campus' smooth={true} offset={-260} duration={500}>
              Gallery</Link></li>
            </ul>
          </div>
          <div className="footer-content-right">
            <h2>CONTACT US</h2>
            <ul>
              <li>123456789</li>
              <li>fayazpajju12@fayaz.com</li>
            </ul>
          </div>
        </div>
        <hr/>
        <p className="footer-copyright">
            Copyright 2024 @ KAMIL.COM -All Rights Reserved
        </p>
    </div>
  )
}

export default Footer