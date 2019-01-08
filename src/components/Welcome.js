import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Footer from './Footer';

class Home extends Component {

    render() {

        this.props.playAnimation(window.location.pathname);
        return (
            <div className="container text-center welcome page">
                <div className="main-content">
                    <div className="main-content--welcome-text">
                        <h1>Welcome</h1>
                    </div>

                    <div className="main-content--button-area">
                        <NavLink className="button" to="/TablePicker">MAKE A RESERVATION</NavLink>
                    </div>
                </div>
                <Footer />
            </div>

        )

    }

}

export default Home;