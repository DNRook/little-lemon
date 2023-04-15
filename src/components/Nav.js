import React from 'react'
import Logo from '../Assets/Logo.svg';

const Nav = () => {
  return (
    <>
    <div className='nav_section'>
     <img src={Logo} alt='little lemon logo'/>
     <ul className='menu-items'>
       <li><a href='#' className='active'>Home</a></li>
       <li><a href='#'>About</a></li>
       <li><a href='#'>Menu</a></li>
       <li><a href='#'>Reservation</a></li>
       <li><a href='#'>Order Online</a></li>
       <li><a href='#'>Login</a></li>
     </ul>
    </div>
    </>
  )
}

export default Nav