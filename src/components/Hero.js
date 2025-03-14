import React from 'react';
import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>ARENA, CATALYSEUR DE CROISSANCE</h1>
        <h1>URBAINE ET ECONOMIQUE AU MAROC.</h1>
      </div>
      <img className='hero-logo' src='/images/Arena-logo.png' alt='hego'></img>
    </section>
  );
};

export default Hero;
