import React, { Component } from 'react';
import '../styles/common.css';

import ProfileInfo from './ProfileInfo.js';
import StatisticalOverview from './StatisticalOverview.js';

import {
    Container,
    Row,
    Col,
} from 'muicss/react';

class ProfilePage extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <Container className="profile-page">
                <Row>
                    <ProfileInfo />
                </Row>
                <Row>
                    <StatisticalOverview />
                </Row>
            </Container>
        );
    }
}

export default ProfilePage;
