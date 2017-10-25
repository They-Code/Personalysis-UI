import React, { Component } from 'react';
import '../styles/common.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.login = this.login.bind(this);
    }

    login() {
        this.props.updateLogin(true);
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

export default Login;
