import React from 'react'
import { Link } from "react-router-dom";
import ResturantFood from '../Assets/restauranfood.jpg';
const Header = () => {
  return (
    <>
  <div className='hero_section'>
    <div className='container'>

     <section className='hero-content'>
      <h2>Chicago</h2>
      <h3>Little Lemon</h3>
       <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      <Link to="/booking">
        <button className='booking-button' role="button">Book a Table</button>
      </Link>
      </section>
      <section>
        <img src={ResturantFood} alt="hero image of resturant food" className='hero-img'/>
     </section>
    </div>
  </div>
 
   
    </>
  )
}

export default Header