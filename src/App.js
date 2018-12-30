import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Test from './components/Test';
import Home from './components/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/test' component={Test} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
