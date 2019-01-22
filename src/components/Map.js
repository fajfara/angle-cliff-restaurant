import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import mapImage from '../img/map-island.jpg';

class Location extends Component {


    render() {

        return (
            <div className="container location text-center page">
                <img src={mapImage} className="location--map" alt="Map of our location" />
                <div className="location--main-content">
                    <div className="container-fluid location--main-content--buttons">
                        <div className="row">
                            <div className="col">
                                <Link className="button location--main-content--buttons--make-res" to="/About">BACK</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Location;