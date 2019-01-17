import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Contact extends Component {
    componentWillMount() {
        this.props.playAnimation(window.location.pathname);

    }

    render() {
        return (
            <div className="contact-us container text-center">
                <h1>This is the contact page</h1>

                <Link className="button submit-form-button" to="/">SEND MESSAGE</Link>
            </div>
        )
    }
}

export default Contact;
