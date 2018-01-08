import React, { Component } from 'react';
import Menu from './components/Menu/Menu';
import Profile from './components/Profile/Profile';
import About from './components/About/About';
import Bio from './components/Bio/Bio';
import Contact from './components/Contact/Contact';
import Form from './components/Form/Form';
import Projects from './components/Projects/Projects';
import Websites from './components/Websites/Websites';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
                <div className="container">
                  <Menu/>
                  <Profile/>
                  <About/>
                  <Bio/>
                  <Contact/>
                  <Form/>
                  <Projects/>
                  <Websites/>
                </div>
      </div>
    );
  }
}

export default App;
