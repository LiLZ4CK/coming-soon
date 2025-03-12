import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Group from './components/Group';
import Vision from './components/Vision';
import Metiers from './components/Metiers';
import Marque from './components/Marque';
import Carriere from './components/Carriere';
import Footer from './components/Footer';
import './App.css'; // Import your CSS here

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div id="hero"><Hero /></div>
      <div id="group"><Group /></div>
      <div id="vision"><Vision /></div>
      <div id="metiers"><Metiers /></div>
      <div id="marque"><Marque /></div>
      <div id="carriere"><Carriere /></div>
      <div id="footer"><Footer /></div>
    </div>
  );
};

export default App;
