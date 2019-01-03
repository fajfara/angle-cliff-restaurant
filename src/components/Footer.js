import React, { Component } from 'react';
import CountUp from 'react-countup';

class Footer extends Component {
    state = {
        countupDuration: 6
    }
    render() {
        return (
            <div className="container footer text-center">
                <div className="row">
                    <div className="col"></div>
                    <div className="col footer-item">
                        <div className="footer-item--main-text">
                            <CountUp end={3657} duration={this.state.countupDuration} />
                        </div>
                        <div className="footer-item--sub-text">
                            <span>Dinners served</span>
                        </div>
                    </div>

                    <div className="col footer-item">
                        <div className="footer-item--main-text">
                            <CountUp end={6789} duration={this.state.countupDuration} />
                        </div>
                        <div className="footer-item--sub-text">
                            <span>Happy customers</span>
                        </div>
                    </div>

                    <div className="col footer-item">
                        <div className="footer-item--main-text">
                            <CountUp end={34} duration={this.state.countupDuration} />
                        </div>
                        <div className="footer-item--sub-text">
                            Awards
                        </div>
                    </div>

                    <div className="col footer-item">
                        <div className="footer-item--main-text">
                            0
                        </div>
                        <div className="footer-item--sub-text">
                            Plates broken
                        </div>
                    </div>
                    <div className="col footer-item"></div>
                </div>
            </div>
        )
    }
}

export default Footer;