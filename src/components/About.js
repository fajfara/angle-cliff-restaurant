import React, { Component } from 'react'
import anime from 'animejs';

class About extends Component {
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
            <div className="container text-center">

                <h4 className="center">
                    This is the About page
                </h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ipsa id sapiente minus aliquid reprehenderit consequatur libero eos totam, nihil provident praesentium ullam natus. Modi perspiciatis porro cum dolorum ea.
                </p>
            </div>
        )
    }
}
export default About;