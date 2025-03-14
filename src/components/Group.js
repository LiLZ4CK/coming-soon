import React from 'react';
import './Group.css'

const Group = () => {
  return (
    <section id="home" className="group">
      <div className="group-content">
        <h1>QUI SOMMES NOUS?</h1>
        <p>
          Arena Property Development est une société marocaine de promotion immobilière qui s’impose<br />
          comme un acteur clé du secteur. Née avec une ambition claire de redéﬁnir les standards de<br />
          l’immobilier, Arena combine innovation, qualité et engagement envers la durabilité pour transformer<br />
          les espaces de vie au Maroc.<br /><br />
          Le groupe se distingue par sa capacité à conjuguer des visions locales et internationales grâce à des<br />
          partenariats stratégiques solides.
        </p>
        <button className="button">
            <b>En savoir plus</b>
        </button>
      </div>
    </section>
  );
};

export default Group;