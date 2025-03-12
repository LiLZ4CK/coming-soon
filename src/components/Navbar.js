import React, { useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
      }
    });
  };

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    document.querySelector(link).scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="navbar">
      <nav>
        <div className="left-links">
          <ul>
            <li><a href="#group" onClick={(e) => handleLinkClick(e, '#group')}>NOTRE GROUP</a></li>
            <li><a href="#vision" onClick={(e) => handleLinkClick(e, '#vision')}>VISION&VALEURS</a></li>
            <li><a href="#metiers" onClick={(e) => handleLinkClick(e, '#metiers')}>NOS METIERS</a></li>
          </ul>
        </div>
        
        <div className="center-link">
          <ul>
            <li><a href="#hero" onClick={(e) => handleLinkClick(e, '#hero')}>ARENA</a></li>
          </ul>
        </div>
        
        <div className="right-links">
          <ul>
            <li><a href="#marque" onClick={(e) => handleLinkClick(e, '#marque')}>NOS MARQUES</a></li>
            <li><a href="#carriere" onClick={(e) => handleLinkClick(e, '#carriere')}>ACTUALITES</a></li>
            <li><a href="#carriere" onClick={(e) => handleLinkClick(e, '#carriere')}>CARRIERE</a></li>
            <li><a href="#carriere" onClick={(e) => handleLinkClick(e, '#carriere')}>CONTACT</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
