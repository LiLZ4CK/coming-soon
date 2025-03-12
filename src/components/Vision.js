import React from 'react';
import './Vision.css'

const Vision = () => {
  return (
    <section id="home" className="vision">
        <h1 className='title'>CHIFFRES CLES</h1>
      <div className="vision-content">
        <dev className='left'>
            <h2>100</h2>
            <p>Développements sur plus 
                de 100 hectares de terrain, 
                marquant l’empreinte d’ARENA 
                dans le secteur de l’immobilier</p>
        </dev>
        <dev className='centre'>
            <h2>80</h2>
            <p>Une équipe de 80 
                professionnels hautement 
                qualiﬁés et dédiés à 
                l’excellence</p>
        </dev>
        <dev className='right'>
            <h2>20K</h2>
            <p>Construction de plus de 20000 
                unités résidentielles,
                contribuant à façonner des
                communautés dynamiques</p>
        </dev>
        
        
        
      </div>
    </section>
  );
};

export default Vision;

