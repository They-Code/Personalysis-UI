import React, { Component } from 'react';
import '../styles/common.css';

import {
  Container,
  Row,
  Col,
} from 'muicss/react';

import {
  AppBar,
  FlatButton
} from 'material-ui';

class Nav extends Component {
  render() {
    return (
      <Container className="navbar" fluid={true}>
        <Row>
          <Col md="12">

          <AppBar
            style={{
              backgroundColor: 'white',
            }}
            title="Personalystic"
            titleStyle={{
              flex: 'none',
              marginRight: '0.5em',
              color: '#67B1C3'
            }}
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
                    <FlatButton>FEATURES</FlatButton>
                  </Col>
                  <Col md="1">
                    <FlatButton>CONTACT</FlatButton>
                  </Col>
                  <Col md="1">
                    <FlatButton>ABOUT US</FlatButton>
                  </Col>
                  <Col md="4">
                    <FlatButton>BLOG</FlatButton>
                  </Col>
                  <Col md="4" className="login-button">
                    <FlatButton>LOGIN</FlatButton>
                  </Col>
                  <Col md="1" className="signup-button">
                    <FlatButton>SIGN UP</FlatButton>
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
