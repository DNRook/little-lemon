import React from 'react'
import Logo from '../Assets/Logo.svg';
import { NavLink } from "react-router-dom";


const Nav = () => {
  return (
    <>
    <div className='nav_section'>
     <img src={Logo} alt='little lemon logo'/>
     <ul className='menu-items'>
       <li><NavLink to='/' exact activeClassName="active">Home</NavLink></li>
       <li><NavLink to='/about' activeClassName="active">About</NavLink></li>
       <li><NavLink to="/booking" activeClassName="active">Reservation</NavLink></li>
       <li><NavLink to="/help" activeClassName="active">Help</NavLink></li>
     </ul>
    </div>
    </>
  )
}

export default Nav