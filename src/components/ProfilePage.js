import React, { Component } from 'react';
import '../styles/profilePage.css';

import ProfileInfo from './ProfileInfo.js';
import StatisticalOverview from './StatisticalOverview.js';

import Nav from './Nav.js';

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
            <div>
                <Nav />
                <Container className="profile-page">
                    <Row>
                        <Col md="12">
                            <ProfileInfo />
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12">
                            <StatisticalOverview />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default ProfilePage;
