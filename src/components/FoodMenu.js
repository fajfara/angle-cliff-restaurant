import React, { Component } from 'react';
import frontMenuPage from '../img/svgs/food-menu.svg';
import backMenuPage from '../img/svgs/food-menu-backside.svg';

export class FoodMenu extends Component {



    componentWillMount() {
        this.props.playAnimation(window.location.pathname);

    }
    render() {
        return (
            <div className="container food-menu text-center page" id="foodMenu">
                <label>
                    <input type="checkbox" />
                    <div className="card">
                        <div className="front">
                            <img src={frontMenuPage} className="logo" alt="logo" />
                        </div>
                        <div className="back">
                            <img src={backMenuPage} className="logo" alt="logo" />
                            <div className="back--content">
                                <h1 className="back--content--Menu-title">
                                    MENU A LA CARTE
                                </h1>
                                <div className="back--content--menu-item">
                                    <h1>STARTER</h1>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Quis vel sunt accusantium quo ducimus aperiam odio voluptates facere ipsum autem sequi non minus quisquam illo at voluptatum veniam,
                                        nihil adipisci.
                                    </p>
                                    <span>65.00$</span>
                                </div>

                                <div className="back--content--menu-item">
                                    <h1>ENTREE</h1>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Quis vel sunt accusantium quo ducimus aperiam odio voluptates facere ipsum autem sequi non minus quisquam illo at voluptatum veniam,
                                        nihil adipisci.
                                    </p>
                                    <span>125.00$</span>
                                </div>

                                <div className="back--content--menu-item">
                                    <h1>SECOND COURSE</h1>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Quis vel sunt accusantium quo ducimus aperiam odio voluptates facere ipsum autem sequi non minus quisquam illo at voluptatum veniam,
                                        nihil adipisci.
                                    </p>
                                    <span>230.00$</span>
                                </div>

                                <div className="back--content--menu-item">
                                    <h1>DESSERT</h1>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Quis vel sunt accusantium quo ducimus aperiam odio voluptates facere ipsum autem sequi non minus quisquam illo at voluptatum veniam,
                                        nihil adipisci.
                                    </p>
                                    <span>70.00$</span>
                                </div>
                            </div>

                            <div className="back--content--menu-item-buffer-bottom">
                            </div>
                        </div>
                    </div>
                </label>
            </div>
        )
    }
}

export default FoodMenu;
