import React, { Component } from 'react';
import Welcome from './components/Welcome'
import Projects from './components/Projects'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import arrow from './images/arrow.gif'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
          <Welcome />
        <div className="down-arrow">
          <a href="#projects"><img src={arrow} alt="Sroll" width="50px"/></a>
        </div>
        <h2 className="heading" id="projects">PROJECTS</h2>
          <Projects />
        <h2 className="heading" id="footer">CONTACT</h2>
          <Footer />
      </div>
    );
  }
}

export default App;
