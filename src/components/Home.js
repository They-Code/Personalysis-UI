import React, { Component } from 'react';
import '../styles/common.css';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

class Home extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <Container className="landing-main-container">
                <Row className="landing-main">

                    <Col md="12">md-12
                        <br/>
                        <br/>
                        <h1 className="landing-main-tagline">
                            Who You Are
                            <br/>
                            Is In Your
                            <br/>
                            DNA
                        </h1>
                    </Col>
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
