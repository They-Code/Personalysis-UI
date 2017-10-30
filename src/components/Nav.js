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
      <div className="navbar">
        <AppBar
          style={{
            backgroundColor: '#F5F2F0',
          }}
          title="Personalysis"
          titleStyle={{
            color: '#67B1C3',
            minWidth: '5.7em',
            maxWidth: '5.7em',
            paddingRight: '.5em',
          }}
          showMenuIconButton={false}
          iconStyleRight={{
            marginRight: '0',
            width: '100%',
          }}
          iconElementRight={
            <Container className="button-menu-container" fluid={true}>
              <Row className="button-menu">
                <Col md="1" className="button">
                  <FlatButton onClick={this.onFeaturesButtonClick}>FEATURES</FlatButton>
                </Col>
                <Col md="1" className="button">
                  <FlatButton onClick={this.onContactButtonClick}>CONTACT</FlatButton>
                </Col>
                <Col md="1" className="button">
                  <FlatButton onClick={this.onAboutUsButtonClick}>ABOUT US</FlatButton>
                </Col>
                <Col md="4" className="button">
                  <FlatButton onClick={this.onBlogButtonClick}>BLOG</FlatButton>
                </Col>
                <Col md="4" className="button login-button">
                  <FlatButton onClick={this.onLoginButtonClick}>LOGIN</FlatButton>
                </Col>
                <Col md="1" className="button">
                  <RaisedButton className="signup-button" onClick={this.onSignUpButtonClick}>SIGN UP</RaisedButton>
                </Col>
              </Row>
            </Container>
          }
        />
      </div>
    );
  }
}

export default Nav;
