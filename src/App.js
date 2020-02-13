import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

import SiteHeader from './components/SiteHeader/SiteHeader.js'
import Features from './components/Features/Features';

function App() {
  return (
    <div className="App">
      <SiteHeader />
      <Features />
    </div>
  );
}

export default App;
