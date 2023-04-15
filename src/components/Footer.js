import React from 'react'
import FooterLogo from '../Assets/footer_logo.PNG'
const Footer = () => {
  return (
    <> 
    <div className='footer_section'>
    <img src={FooterLogo} alt='footer little lemon logo'/>
    <div className='footer-menu'>
      <div>
          <h4>Doormat Nav</h4>
        <ul>
          <li><a href='#'>Home</a></li>
         <li><a href='#'>About</a></li>
          <li><a href='#'>Menu</a></li>
          <li><a href='#'>Reservation</a></li>
          <li><a href='#'>Order Online</a></li>
          <li><a href='#'>Login</a></li>
        </ul>
      </div>
    
      <div>
          <h4>Contact</h4>
          <ul>
           <li><a href='#'>Address</a></li>
           <li><a href='#'>Phone Number</a></li>
           <li><a href='#'>Email</a></li>
          </ul>
      </div>
  
       <div>
          <h4>Social Media</h4>
          <ul>
            <li><a href='#'>Address</a></li>
            <li><a href='#'>Phone Number</a></li>
            <li><a href='#'>Email</a></li>
          </ul>
        </div>
    </div>
  </div>
 
    </>
  )
}

export default Footer