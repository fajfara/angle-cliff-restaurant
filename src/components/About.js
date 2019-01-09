import React, { Component } from 'react'
import SocialLinks from './socialLinks';
import { Link } from 'react-router-dom';

class About extends Component {

    render() {
        this.props.playAnimation(window.location.pathname);
        this.props.socialLinksAnimation();
        return (
            <div className="container about-us text-center page">

                <h4 className="center about-us--title">
                    About us
                </h4>
                <div className="about-us--main-content">
                    <p>
                        We are a small, private restaurant on the Baleares Islands, south of Spain. We pride ourselfs on our premium, elegant service. Every customer that leaves our restaurant is filled with joy.
                        We serve a lot of different kind of dishes, but majority of our menu is composed of Spanish dishes. We are an affordable premium restaurant, with a view that can't be rivaled.
                    </p>
                    <div className="container-fluid about-us--main-content--buttons">
                        <div className="row">
                            <div className="col">
                                <Link className="button about-us--main-content--buttons--make-res" to="/TablePicker">MAKE A RESERVATION</Link>
                            </div>
                            <div className="col">
                                <Link className="button about-us--main-content--buttons--location" to="/">SEE OUR LOCATION</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <SocialLinks />
            </div>
        )
    }
}
export default About;