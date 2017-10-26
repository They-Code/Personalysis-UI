import React, { Component } from 'react';
import '../styles/profilePage.css';

import Nav from './Nav.js';
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

        const isLoggedIn = this.props.location.state ?
            Boolean(this.props.location.state.isLoggedIn) :
            false;

        this.state = {
            isLoggedIn,
        };
    }

    componentWillMount() {
        if (!this.state.isLoggedIn) {
            console.log('User is not logged in. Redirecting to login page');
        }
    }

    componentDidMount() {
        if (this.state.isLoggedIn) {
            console.log('User is logged in. Fetching user Awakens data');
        }
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
