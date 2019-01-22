import React, { Component } from 'react';
import facebookIcon from '../img/social-icons/facebook.png';
import instagramIcon from '../img/social-icons/instagram.png';

class SocialLinks extends Component {

    render() {
        return (
            <div className="container social-links text-center" id="social-links">
                <h2>Learn more about us:</h2>
                <div className="row">
                    <div className="col">
                        <img className="fb-img socialIcons" src={facebookIcon} alt="facebook icon" />
                    </div>
                    <div className="col">
                        <img className="insta-img socialIcons" src={instagramIcon} alt="facebook icon" />
                    </div>
                </div>
            </div>
        )
    }
}

export default SocialLinks;