import React from 'react';
import logo from '../img/logo.svg';

const Navbar = () => {
    return (
        <div className="logo-and-menu container text-center">
            <div className="container">
                <img src={logo} className="logo" alt="logo" />
                <div className="main-menu">
                    <ul className="nav-links">
                        <li><a href="/">HOME</a></li>
                        <li><a href="/">ABOUT US</a></li>
                        <li><a href="/">MENU</a></li>
                        <li><a href="/">CONTACT</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;