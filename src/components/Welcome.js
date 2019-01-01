import React, { Component } from 'react'
import anime from 'animejs';
import { NavLink } from 'react-router-dom';

class Home extends Component {

    playAnimation() {
        let morphing = anime({
            targets: '#test',
            d: [
                { value: 'M497.6,0c-261.7,228.1-354.5,593.4-75.9,762.1s400.5-89,998.6,151.2c478.5,192.1,499.7,163.2,499.7,163.2v3.5c0,0-1910.5,5.1-1920,0V345.3V0' },
            ],
            easing: 'easeInOutQuint',
            duration: 1300,
            loop: false,
            autoplay: false

        });
        morphing.play();
    }
    render() {
        this.playAnimation();
        return (
            <div className="container text-center welcome">
                <div className="main-content">
                    <div className="main-content--welcome-text">
                        <h1>Welcome</h1>
                    </div>

                    <div className="main-content--button-area">
                        <div className="button button-blue">
                            <span><NavLink to="/TablePicker">MAKE A RESERVATION</NavLink></span>
                        </div>
                    </div>
                </div>
            </div>
        )

    }

}

export default Home;