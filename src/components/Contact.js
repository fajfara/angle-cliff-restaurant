import React, { Component } from 'react';/* 
import { Link } from 'react-router-dom'; */

export class Contact extends Component {
    state = {
        name: 'name',
        email: 'email',
        message: 'message'
    }
    componentWillMount() {
        this.props.playAnimation(window.location.pathname);

    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div className="contact-us container text-center">
                <form id="contact" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Your name: </label>
                        <input type="text" className="form-control" id="name" placeholder="Enter your name..." onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Your email: </label>
                        <input type="email" className="form-control" id="email" placeholder="Enter your email..." onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control" id="message" rows="5" placeholder="Enter your message..." onChange={this.handleChange}></textarea>
                    </div>
                    <button className="submit-form-button button" name="submit" type="submit" id="contact-submit" data-submit="...Sending">SEND YOUR MESSAGE</button>
                </form>
            </div>
        )
    }
}

export default Contact;
