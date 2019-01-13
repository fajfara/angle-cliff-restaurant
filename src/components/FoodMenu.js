import React, { Component } from 'react';
import MenuFrontPage from '../img/svgs/food-menu.svg';
import anime from 'animejs';

export class FoodMenu extends Component {

    animateMenuOnLoad = () => {
        anime.remove(".food-menu-svg");
        const show = anime({
            targets: '.food-menu-svg',
            opacity: [
                { value: 0, duration: 500 },
                { value: 1, duration: 500 }
            ],
            translateY: [
                { value: 1000, duration: 700 },
                { value: 0, duration: 700 }
            ],
            translateX: [
                { value: '-50%', duration: 500 },
                { value: '-50%', duration: 500 }
            ],
            easing: 'easeOutExpo'
        });
        show.play();
    }



    componentWillMount() {
        anime.remove("#pathAnimate #svgBackground");
        this.props.playAnimation(window.location.pathname);

    }

    componentDidMount() {
        this.animateMenuOnLoad();
    }
    render() {
        return (
            <div className="container food-menu text-center page" id="foodMenu">
                <div className="food-menu-svg">
                    <img src={MenuFrontPage} className="food-menu-svg-front" alt="Please check your connection" />
                </div>
            </div>
        )
    }
}

export default FoodMenu;
