import React, { Component } from 'react';
import '../styles/common.css';
import Nav from './Nav.js';

class Home extends Component {
    constructor() {
        super();
        this.state = {};
    }
    
    render() {
        return (
            <Nav />
        );
    }
}

export default Home;