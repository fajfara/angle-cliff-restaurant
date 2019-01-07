import React, { Component } from 'react';
import Navbar from './components/Navbar';
import TablePicker from './components/TablePicker';
import Welcome from './components/Welcome';
import About from './components/About';
import Footer from './components/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import anime from 'animejs';
import './App.css';


class App extends Component {

  playAnimation(routeName) {

    anime.remove("html, body");
    const animeType = {
      'moveUp': 'M497.6,0c-261.7,228.1-354.5,593.4-75.9,762.1s400.5-89,998.6,151.2c478.5,192.1,499.7,163.2,499.7,163.2v3.5c0,0-1910.5,5.1-1920,0V345.3V0',
      'moveDown': 'M497.6,0c-261.7,228.1-338.9,942.1-60.3,1110.7s400.5-89,998.6,151.2c478.5,192.1,484.1-185.4,484.1-185.4v3.5c0,0-1910.5,5.1-1920,0V345.3V0'
    }
    let value = animeType.moveUp;

    if (routeName === '/TablePicker') {
      value = animeType.moveDown;
    }


    const morphing = anime({
      targets: '#test',
      d: [
        { value: value }
      ],
      easing: 'easeOutExpo',
      duration: 2000,
      loop: false,
      autoplay: false,
      elasticity: 1000

    });
    morphing.play();
  }

  logKey(location) {
    const footer = document.getElementById('footer');
    console.log(footer);
    if (location.pathname === '/About') {
      footer.classList.add('hide');
    }
  }


  render() {
    return (
      <BrowserRouter>
        <Route render={({ location }) =>
          <div className="App">
            <Navbar />
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                timeout={{ enter: 300, exit: 300 }}
                classNames="fade"
                unmountOnExit

              >
                <Switch location={location}>
                  <Route exact path='/' render={props => <Welcome playAnimation={this.playAnimation} />} />
                  <Route path='/TablePicker' render={props => <TablePicker playAnimation={this.playAnimation} />} />
                  <Route path='/about' render={props => <About playAnimation={this.playAnimation} />} />
                </Switch>
              </CSSTransition>
              <Footer logKey={this.logKey} location={location} />
            </TransitionGroup>
          </div>
        } />
      </BrowserRouter>
    );
  }
}

export default App;
