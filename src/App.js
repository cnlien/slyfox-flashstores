import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

import SiteHeader from './components/SiteHeader/SiteHeader.js'
import Features from './components/Features/Features';
import MiddleImage from './images/smartmockups_k6jjqaj0.png';
import HowItWorks from './components/HowItWorks/HowItWorks';

function App() {
  return (
    <div className="App">
      <SiteHeader />
      <Features />
      <img style={{width:"100%"}} src={MiddleImage} alt="computer with a screenshot"/>
      <HowItWorks />
    </div>
  );
}

export default App;
