import React from 'react';

import Hero from './Components/Hero/Hero';
import TiltCard from './Components/TiltCard/TiltCard';
import Landing from './Components/Landing/Landing';
import NavBar from './Components/NavBar/NavBar';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer'

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <NavBar/>
     <Landing/>
     <Footer/>
    </div>
  );
}

export default App;
