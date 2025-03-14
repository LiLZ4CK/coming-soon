import React from 'react';
import './Metiers.css';

const Metiers = () => {
  return (
    <section id="metiers" className="metiers">
      <div className="metiers-content">
        <h1>NOS METIERS</h1>
        <div className="metiers-images">
          <div className='image-container'>
            <img src="/images/shutterstock_736171885.jpg" alt=" 1" />
            <div className='image-text'>
              PROMOTION<br />IMMOBILIERE
              <a href="/">
                  <h3>voir détails</h3>
              </a>
            </div>
          </div>
          <div className='image-container'>
            <img src="/images/VistaCreate-152897154-stock-photo-professional-architect-in-hard-hat.jpg" alt=" 2" />
            <div className='image-text'>
              MAITRISE D’OUVRAGE<br />DELEGUEE
              <a href="/">
                  <h3>voir détails</h3>
              </a>
            </div>
          </div>
          <div className='image-container'>
            <img src="/images/shutterstock_2259342275.jpg" alt=" 3" />
            <div className='image-text'>
              CONSEIL<br />EN INVESTISSEMENT
              <a href="/">
                  <h3>voir détails</h3>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metiers;