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
    FlatButton,
    Menu,
    MenuItem,
    IconButton,
    FontIcon
  } from 'material-ui';

import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';

import DNA_sketch from '../images/DNA_drawing.png';

import ActionHome from 'material-ui/svg-icons/action/home';



class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
        };

        this.DNA_drawing = DNA_sketch;
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
                <FloatingActionButton className="floating-button" backgroundColor="#F5F2F0" onClick={this.handleTouchTap}/>
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
                        <MenuItem primaryText="Help &amp; feedback" style={{backgroundColor:'#67B1C3', color: 'white'}}/>
                        <MenuItem primaryText="Settings" style={{backgroundColor:'#80C6B0', color: 'white'}}/>
                        <MenuItem primaryText="Sign out" style={{backgroundColor:'#F0BB56', color: 'white'}}/>
                    </Menu>
                </Popover>
                <Row className="landing-row">
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
                        <RaisedButton label="Sign Up For Free" className="signup-button" backgroundColor='#F5F2F0'/>
                    </Col>
                    <Col md="7">
                    </Col>
                </Row>
                 <Row className='features-title-row'>
                    <Col md="2" className = 'features-DNA-col'>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <img src={this.DNA_drawing} className='DNA-drawing' />

                    </Col>
                    <Col md="2" className='features-title-col'>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <h1 className="features-title">
                            Features
                        </h1>
                    </Col>
                 </Row>
                 <Row className="features-main-row">

                    <Col md="2"/>
                    <Col md="1" className="features-left">
                        <FlatButton label="feature-1" className="feature-button-1" backgroundColor='#F97150'
                                    hoverColor='#F0BB56'/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <FlatButton label="feature-2" className="feature-button-2" backgroundColor='#67B1C3'
                                    hoverColor='#80C6B0'/>
                    </Col>
                     <Col md="3">

                         <p>Now this is a story all about how
                                 my life got flipped-turned upside down
                                 and I'd like to take a minute
                                 just sit right there
                                 I'll tell you how I became the prince of a town called Bay-Air</p>
                         <br/>
                         <br/>
                         <p>In west Philadelphia born and raised
                             on the playground was where I spent most of my days
                             chillin' out maxin' relaxin' all cool
                             and all shooting some b-ball outside of the school
                             when a couple of guys who were up to no good
                             started making trouble in my neighborhood
                             I got in one little fight and my mom got scared
                             she said, "You're movin' with your auntie and uncle in Bay-Air."</p>
                     </Col>
                    <Col md="1" className="features-right">
                        <FlatButton label="feature-3" className="feature-button-3" backgroundColor='#80C6B0'
                                    hoverColor='#67B1C3'/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <FlatButton label="feature-4" className="feature-button-4" backgroundColor='#F0BB56'
                                    hoverColor='#F97150'/>
                    </Col>
                    <Col md="3">
                        <p>
                            I whistled for a cab and when it came near
                            the license plate said "Fresh" and it had dice in the mirror
                            if anything I could say that this cab was rare
                            but I thought, "Nah, forget it."
                            – "Yo, home to Bay-Air."
                        </p>
                        <br/>
                        <br/>
                        <p>
                            I pulled up to the house about 7 or 8
                            and I yelled to the cabbie, "Yo home smell ya later."
                            I looked at my kingdom
                            I was finally there
                            to sit on my throne as the Prince of Bay-Air
                        </p>
                    </Col>
                    <Col md="2"/>

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
