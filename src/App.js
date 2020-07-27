import React, { useState } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import Homepage from './components/Homepage'
import Nav from './components/navbar/Nav'
import About from './components/About';

function App() {

  /** 
    * Metode som henter høyde av viewport minus nettleser sin toolbar 
  */
  const getViewHeight = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  getViewHeight()

  const [visited, setVisited] = useState(false)

  return (
    <Router>
      <Nav/>
      <Route exact path="/">
        <Homepage visited={visited} setVisited={setVisited}/>
      </Route>
      <Route path="/about">
        <About/>
      </Route>
    </Router>
  );
}

export default App;
