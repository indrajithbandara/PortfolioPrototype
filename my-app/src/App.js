import React, { Component } from 'react';
import Menu from './components/Menu/Menu';
import Profile from './components/Profile/Profile';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
                <div className="container">
                  <Menu/>
                  <Profile/>
                  <div className="item white"></div>
                  <div className="item black"></div>
                  <div className="item black"></div>
                  <div className="item white"></div>
                  <div className="item white"></div>
                  <div className="item black"></div>
                </div>
      </div>
    );
  }
}

export default App;
