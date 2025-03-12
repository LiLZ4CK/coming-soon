import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <div className="company">
          <h1 className="company-name">ARENA</h1>
          <p className="company-subtitle">Property Development</p>
        </div>
        <div className="links">
          <h3>ACCUEIL</h3>
          <h3>NOTRE GROUP</h3>
          <h3>VISION & VALEURS</h3>
          <h3>NOS METIERS</h3>
          <h3>NOS MARQUES</h3>
          <h3>ACTUALITES</h3>
          <h3>CARRIERE</h3>
          <h3>CONTACT</h3>
        </div>
      </div>
      <p className="copyright">© 2025 ARENA Property Development. All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
