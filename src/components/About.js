import React, { Component } from 'react'
import SocialLinks from './socialLinks';

class About extends Component {

    render() {
        this.props.playAnimation(window.location.pathname);
        return (
            <div className="container text-center page">

                <h4 className="center">
                    This is the About page
                </h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ipsa id sapiente minus aliquid reprehenderit consequatur libero eos totam, nihil provident praesentium ullam natus. Modi perspiciatis porro cum dolorum ea.
                </p>
                <SocialLinks />
            </div>
        )
    }
}
export default About;