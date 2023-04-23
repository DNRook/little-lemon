import React from 'react'
import bruchetta from '../Assets/bruchetta.png';
import greek from '../Assets/greek_salad.jpg';
import lemon from '../Assets/lemon_dessert.jpg';
import { Link} from "react-router-dom";
const Homepage = () => {
  return (
    <>
      <section className='homepage_section'>
        <section className='homepage-header'>
          <h2>Specials</h2>
          <Link to="/booking">
            <button className='order-button'>Order Now</button>
          </Link>
          
        </section>
        <section className='card-grid'>
          <div className='card'>
            <div className='card-container'>
              <img src={bruchetta} alt="bruchetta card image" role="image" className='card-image'/>
              <p className='item'>Bruchetta <span className='item-price'>$5.99</span></p>
              <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                 Ut enim ad minim veniam.
              </p>
              <p className='card-bottom'>Order Delivery <span className='delivery-price'>$1</span></p>
            </div>
          </div>
          <div className='card'>
            <div className='card-container'>
              <img src={greek} alt="bruchetta card image" role="image" className='card-image'/>
              <p className='item'>Greek Salad <span className='item-price'>$5.99</span></p>
              <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                 Ut enim ad minim veniam.
              </p>
              <p className='card-bottom'>Order Delivery <span className='delivery-price'>$1</span></p>
            </div>
          </div>
          <div className='card'>
            <div className='card-container'>
              <img src={lemon} alt="bruchetta card image" role="image" className='card-image'/>
              <p className='item'>Lemon dessert <span className='item-price'>$5.99</span></p>
              <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                 Ut enim ad minim veniam.
              </p>
              <p className='card-bottom'>Order Delivery <span className='delivery-price'>$1</span></p>
            </div>
          </div>
        </section>
     
        <section className='testimonial'>
          <h1>Testimonial</h1>
          <div className='testimonal-container'>  
          <div className='testimonial-card'>
            <div>
              <h4>user</h4>  
              <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </div>
          </div>
          <div className='testimonial-card'>
            <div>
              <h4>user</h4>  
              <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </div>
          </div>
          <div className='testimonial-card'>
            <div>
              <h4>user</h4>  
              <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </div>
          </div>
          <div className='testimonial-card'>
            <div>
              <h4>user</h4>  
              <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </div>
          </div>
        </div>
        </section>
      </section>
  
    </>
  )
}

export default Homepage