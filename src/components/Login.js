import React, { Component } from 'react';
import '../styles/common.css';
import { withRouter } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.login = this.login.bind(this);
    }

    login() {
        this.props.history.push('/profile', {
            isLoggedIn: true,
        });
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <button type="button" onClick={this.login}>Login</button>
            </div>
        );
    }
}

export default withRouter(Login);
