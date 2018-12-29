import React, { Component } from 'react';
import Navbar from './components/Navbar';
import SvgBg from './img/wave-shape-bg.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="svg-shape">
          <img src={SvgBg} alt="" />
        </div>
        <Navbar />
      </div>
    );
  }
}

export default App;
