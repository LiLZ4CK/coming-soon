import React from 'react';
import './Marque.css';

const Marque = () => {
  return (
    <section id="marque" className="marque">
      <div className="marque-content">
        <h1>NOS MARQUES</h1>
        <div className="marque-images" background-color="#003851">
            <dev className='artof'>ART OF LIVING</dev>
            <img src="/images/Nos-marques-logos-al-alia.png" alt="1" />
            <img src="/images/Nos-marques-logos-Palms.png" alt="2" />
            <img src="/images/Nos-marques-logos-Workin.png" alt="3" />

        </div>
      </div>
    </section>
  );
};

export default Marque;
