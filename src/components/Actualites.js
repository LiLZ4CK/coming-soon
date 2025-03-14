import React, { useState } from 'react';
import './Actualites.css';

// Logo imports
import lesEcoLogo from '../images/ÉCO.ma_.png';
import le360Logo from '../logo512.png';
import medias24Logo from '../logo512.png';
import alAliaLogo from '../images/Nos-marques-logos-Al-Alia.jpg';
import sanamLogo from '../images/Sanam holding.png';
import alAliaCareLogo from '../images/article1.jpg';

const Actualites = () => {
    const initialNews = [
      {
        id: 1,
        title: "Immobilier : Arena lance un programme durable de 5 milliards de dirhams à Casablanca",
        date: "29/10/2024",
        source: "LesEco.ma",
        sourceLogo: lesEcoLogo,
        image: alAliaLogo,
      },
      {
        id: 2,
        title: "Immobilier: le groupe Sanam s'associe avec Aevitas, le gestionnaire néerlandais de fonds de pension américains",
        date: "11/06/2020",
        source: "Le360",
        sourceLogo: le360Logo,
        image: sanamLogo,
      },
      {
        id: 3,
        title: "Covid-19 : Al Alia immobilier se mobilise pour aider financièrement ses acquéreurs",
        date: "22/07/2020",
        source: "Medias24",
        sourceLogo: medias24Logo,
        image: alAliaCareLogo,
      },
    ];
  
    const [news, setNews] = useState(initialNews);
  
    const slideNext = () => {
      // Move the first item to the end
      setNews(prevNews => {
        const newArray = [...prevNews];
        const firstItem = newArray.shift();
        newArray.push(firstItem);
        return newArray;
      });
    };
  
    const slidePrev = () => {
      // Move the last item to the beginning
      setNews(prevNews => {
        const newArray = [...prevNews];
        const lastItem = newArray.pop();
        newArray.unshift(lastItem);
        return newArray;
      });
    };
  
    return (
      <div className="actualites-container">
        <h1 className="actualites-title">ACTUALITES</h1>
        
        <div className="actualites-carousel">
          <button className="carousel-button prev" onClick={slidePrev}>
            &lt;
          </button>
          
          <div className="carousel-content">
            {news.map((item) => (
              <div key={item.id} className="news-card">
                <div className="news-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="news-content">
                  <h3>{item.title}</h3>
                  <div className="news-source">
                    <img src={item.sourceLogo} alt={item.source} className="source-logo" />
                    <span className="news-date">- {item.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button className="carousel-button next" onClick={slideNext}>
            &gt;
          </button>
        </div>
      </div>
    );
  };
  
  export default Actualites;