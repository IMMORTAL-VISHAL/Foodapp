import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>

        <div className='footer-content'>
            <div className='footer-content-right'>
                    <img src={assets.logo} alt=''/>
                    <p>This is Normal for practice we chnage after the implementation</p>
                    <div className='footer-social-icons'>
                      <img src={assets.facebook_icon}/>
                      <img src={assets.twitter_icon}/>
                      <img src={assets.linkedin_icon}/>

                    </div>
            </div>
            <div className='footer-content-center'>
              <h2> COMPANY</h2>
              <ul>
                <li>Home</li>
                <li>About-Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
              </ul>

            </div>
            <div className='footer-content-left'>
                <h2>Get in touch</h2>
                <ul>
                  <li>+91 9857465646</li>
                  <li>Boss@gmail.com</li>
                </ul>
            </div>
            

        </div>
        <hr/>
        <p className='footer-copyright'>Copyright © 2025 Tomato.com -All Right Reserved </p>
        
    </div>
  )
}

export default Footer