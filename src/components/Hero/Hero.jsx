import React from 'react';
import './Hero.css';
import dark_arrow from '../../assets/dark-arrow.png';


const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h3>We guarantee superior education for a brighter future..</h3>
        <p> we are committed to fostering a dynamic and inclusive academic environment that nurtures
           innovation, critical thinking, and lifelong learning.</p>
      
      <button className='btn'>Explore More <img src={dark_arrow} alt=""/></button>
        <img src='../../assets/hero.png' alt='' />
        
        </div>
    </div>
  );
}

export default Hero;
