import React, { Component } from 'react';
import '../styles/profile.css';
import {
    Container,
    Row,
    Col,
} from 'muicss/react';

import {
    Avatar,
} from 'material-ui';

import profilePicture from '../images/max.jpg';

class ProfileInfo extends Component {
    constructor(props) {
        super(props);

        this.profileImage = profilePicture;
    }

    render() {
        return (
            <Container className="profile-info">
                <Row className="profile-info-row">
                    <Col md="5" className="avatar-container">
                        <Avatar
                            src={this.profileImage}
                            style={{
                                backgroundColor: 'transparent',
                                height: '12em',
                                width: '12em',
                                padding: '2em 0em',
                            }}
                        />
                    </Col>
                    <Col md="7" className="user-description-container">
                        <div className="user-description">
                            <div className="user-name">
                                <h1>Max Belman</h1>
                            </div>
                            <div className="user-characteristics">
                                <h2>INFJ / Characteristic 2 / Characteristic 3</h2>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ProfileInfo;
