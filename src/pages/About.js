import React from 'react'
import about from '../Assets/Mario and Adrian A.jpg';
import about2 from '../Assets/Mario and Adrian b.jpg';

const About = () => {
  return (
    <>
    <div className='about'>
    <h2 className='about-header'>Little Lemon</h2>
     <h3 className='about-subheader'>Chicago</h3>
     <article className='about_section'>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
         Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className='img-grid'>
           <img src={about} alt="picture of mario and adrian cooking" role="image" className='about-img'/>
           <img src={about2} alt="picture of mario and adrian cooking" role="image" className='about-img'/>
        </div>
     </article>
    </div>

    </>
  )
}

export default About