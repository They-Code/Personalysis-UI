import React, { Component } from 'react';
import '../styles/common.css';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import Nav from './Nav.js';
import RaisedButton from 'material-ui/RaisedButton';

class Home extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <Container className="landing-main-container">
                <Row className="top-row">
                    <Col md="1">md-1 </Col>
                    <Col md="4">md-4
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
                    <Col md="7">md-7</Col>
                </Row>
                 <Row>
                    <Col md="12">
                        Row2-md-12
                        <br/>
                    </Col>
                 </Row>
                 <Row>
                    <Col md="12">Row3-md-12</Col>
                </Row>
                <Row>
                    <Col md="12">Row4-md-12</Col>
                </Row>
            </Container>
        );
    }

}

export default Home;
