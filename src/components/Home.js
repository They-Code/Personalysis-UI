import React, { Component } from 'react';
import '../styles/common.css';
import Nav from './Nav.js';

import {
    Container,
    Row,
    Col,
} from 'muicss/react';

import {
    FloatingActionButton,
    RaisedButton,
  } from 'material-ui';

class Home extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div>
            <Nav />
            <Container className="landing-main-container">
                <Row className="top-row">
                    <Col md="1">
                    </Col>
                    <Col md="4">
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <h1 className="tagline">
                            Who You Are
                            <br/>
                            Is In Your
                            <br/>
                            DNA
                        </h1>
                        <RaisedButton label="Sign Up For Free" className="signup-button"/>
                    </Col>
                    <Col md="7">
                        <FloatingActionButton className="floating-button" backgroundColor="white"/>
                    </Col>
                </Row>
                 <Row>
                    <Col md="12">
                        <br/>
                    </Col>
                 </Row>
                 <Row>
                    <Col md="12">
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                    </Col>
                </Row>
            </Container>
            </div>
        );
    }

}

export default Home;