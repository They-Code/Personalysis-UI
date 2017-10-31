import React, { Component } from 'react';
import '../styles/profile.css';

import ProfileInfo from './ProfileInfo.js';
import StatisticalOverview from './StatisticalOverview.js';

import Nav from './Nav.js';

import {
    Container,
    Row,
    Col,
} from 'muicss/react';

class Profile extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="profile-page">
                <Nav />
                <ProfileInfo />
                <StatisticalOverview />
            </div>
        );
    }
}

export default Profile;
