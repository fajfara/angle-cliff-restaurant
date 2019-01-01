import React, { Component } from 'react';
import Navbar from './components/Navbar';
import TablePicker from './components/TablePicker';
import Welcome from './components/Welcome';
import About from './components/About';
import Footer from './components/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Welcome} />
            <Route path='/TablePicker' component={TablePicker} />
            <Route path='/about' component={About} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
