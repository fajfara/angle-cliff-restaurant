import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

class Home extends Component {

    render() {

        this.props.playAnimation(window.location.pathname);
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