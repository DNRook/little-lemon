import React from 'react'
import Logo from '../Assets/Logo.svg';
import { Link } from "react-router-dom";


const Nav = () => {
  return (
    <>
    <div className='nav_section'>
     <img src={Logo} alt='little lemon logo'/>
     <ul className='menu-items'>
       <li><Link to='/'  className='active'>Home</Link></li>
       <li><Link to='/about'>About</Link></li>
       <li><Link to="/reservation">Reservation</Link></li>
       <li><Link to="/booking">Order Online</Link></li>
     </ul>
    </div>
    </>
  )
}

export default Nav