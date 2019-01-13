import React from 'react';
import logo from '../img/logo.svg';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="logo-and-menu container text-center">
            <div className="container">
                <Link to="/">
                    <img src={logo} className="logo" alt="logo" />
                </Link>
                <div className="main-menu">
                    <ul className="nav-links">
                        <li><NavLink exact to="/">HOME</NavLink></li>
                        <li><NavLink to="/About">ABOUT</NavLink></li>
                        <li><NavLink to="/Food-menu">MENU</NavLink></li>
                        <li><a href="/">CONTACT</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;