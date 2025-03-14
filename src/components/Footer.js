import React from 'react';
import './Footer.css';
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <div className="company">
          <img className="company-name" src='/images/Arena-logo.png' alt='logoft'></img>
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
      <p className="copyright">© 2025 ARENA Property Development. All Rights Reserved.</p>
      <div className="social-media"> 
      <a href="https://www.instagram.com"> <FaInstagram className='ig' /></a>
      <a href="https://www.facebook.com"> <FaFacebookF className='fb' /></a>
      <a href="https://www.linkedin.com"> <FaLinkedinIn className='in' /></a>
      </div>
    </footer>
  );
};

export default Footer;
