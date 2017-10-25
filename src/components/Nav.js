import React, { Component } from 'react';
import '../styles/common.css';

import {
  Container,
  Row,
  Col,
} from 'muicss/react';

import {
  AppBar,
  FlatButton,
  RaisedButton
} from 'material-ui';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.onTitleClick = this.onTitleClick.bind(this);
    this.onFeaturesButtonClick = this.onFeaturesButtonClick.bind(this);
    this.onContactButtonClick = this.onContactButtonClick.bind(this);
    this.onAboutUsButtonClick = this.onAboutUsButtonClick.bind(this);
    this.onBlogButtonClick = this.onBlogButtonClick.bind(this);
    this.onLoginButtonClick = this.onLoginButtonClick.bind(this);
    this.onSignUpButtonClick = this.onSignUpButtonClick.bind(this);
  }

  onTitleClick() {
    console.log('title clicked');
  }

  onFeaturesButtonClick() {
    console.log('features clicked');
  }
  onContactButtonClick() {
    console.log('contact clicked');
  }

  onAboutUsButtonClick() {
    console.log('about us clicked');
  }

  onBlogButtonClick() {
    console.log('blog clicked');
  }

  onLoginButtonClick() {
    console.log('login clicked');
  }

  onSignUpButtonClick() {
    console.log('signup clicked');
  }

  render() {
    return (
      <Container className="navbar" fluid={true}>
        <Row>
          <Col md="12">
          <AppBar
            title="Personalystic"
            style={{position: 'fixed', backgroundColor:'#F5F2F0'}}
            titleStyle={{
              flex: 'none',
              marginRight: '0.5em',
                color: '#67B1C3'
            }}
            onTitleTouchTap={this.onTitleClick}
            title="Personalystic"

            iconStyleRight={{
              marginLeft: 'auto',
              marginRight: 'auto',
              width: '100%',
              lineHeight: '52px',
            }}
            iconElementRight={
              <Container fluid={true}>
                <Row>
                  <Col md="1">
                    <FlatButton onClick={this.onFeaturesButtonClick}>FEATURES</FlatButton>
                  </Col>
                  <Col md="1">
                    <FlatButton onClick={this.onContactButtonClick}>CONTACT</FlatButton>
                  </Col>
                  <Col md="1">
                    <FlatButton onClick={this.onAboutUsButtonClick}>ABOUT US</FlatButton>
                  </Col>
                  <Col md="4">
                    <FlatButton onClick={this.onBlogButtonClick}>BLOG</FlatButton>
                  </Col>
                  <Col md="4" className="login-button">
                    <FlatButton onClick={this.onLoginButtonClick}>LOGIN</FlatButton>
                  </Col>
                  <Col md="1" className="signup-button">
                    <RaisedButton className ="nav-signup" backgroundColor='#F5F2F0' onClick={this.onSignUpButtonClick}>SIGN UP</RaisedButton>
                  </Col>
                </Row>
              </Container>
            }
            showMenuIconButton={false}
          />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Nav;
