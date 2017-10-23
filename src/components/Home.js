import React, { Component } from 'react';
import '../styles/common.css';
import Container from 'muicss/lib/react/container';
import Nav from './Nav.js';
import {
    Container,
    Row,
    Col,
} from 'muicss/react';

import {
    FloatingActionButton,
    RaisedButton,
    Menu,
    MenuItem
  } from 'material-ui';

import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
        };
    }

    handleTouchTap = (event) => {
        // This prevents ghost click.
        event.preventDefault();

        this.setState({
            open: true,
            anchorEl: event.currentTarget,
        });
    };

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };

    render() {
        return (
            <Container className="landing-main-container">
                <FloatingActionButton className="floating-button" backgroundColor="white"  onClick={this.handleTouchTap}/>
                <Popover
                    open={this.state.open}
                    anchorEl={this.state.anchorEl}
                    anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                    targetOrigin={{horizontal: 'right', vertical: 'bottom'}}
                    onRequestClose={this.handleRequestClose}
                    animation={PopoverAnimationVertical}
                >
                    <Menu>

                        <MenuItem primaryText="Profile" style={{backgroundColor:'#F97150', color: 'white'}} />
                        <MenuItem primaryText="Help &amp; feedback" style={{backgroundColor:'#F0BB56', color: 'white'}}/>
                        <MenuItem primaryText="Settings" style={{backgroundColor:'#80C6B0', color: 'white'}}/>
                        <MenuItem primaryText="Sign out" style={{backgroundColor:'#67B1C3', color: 'white'}}/>
                    </Menu>
                </Popover>
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
        );
    }

}

export default Home;
