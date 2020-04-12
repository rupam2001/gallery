import React from 'react';
import {Switch, Route, Router} from 'react-router-dom';


import Landing from './Components/Landing/Landing';
import NavBar from './Components/NavBar/NavBar';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer'
import Contact from './Components/Contact/Contact';

import './App.css';

function App() {
  return (
    <div className="App">

    <Header/>
      <NavBar/>
    <Switch>
      <Route exact path="/">
        <Landing/>
        <Footer/>
      </Route>
      <Route path="/contact">
        <Contact/>
        <Footer/>
      </Route>
    </Switch>
      
     
     
     
    </div>
  );
}

export default App;
