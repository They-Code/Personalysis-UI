import React, { Component } from 'react';
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
      <Container className="nav" fluid={true}>
        <Row>
          <Col md="12">

          <AppBar
            title="Personalystic"
            titleStyle={{
              'maxWidth' : '17%'
              }}
            iconStyleRight={{
              'marginLeft': 'auto',
              'marginRight': 'auto',
            }}
            iconElementRight={
              <Container fluid={true}>
                <Row>
                  <Col md="2">
                    <FlatButton>FEATURES</FlatButton>
                  </Col>
                  <Col md="2">
                    <FlatButton>CONTACT</FlatButton>
                  </Col>
                  <Col md="2">
                    <FlatButton>ABOUT US</FlatButton>
                  </Col>
                  <Col md="2">
                    <FlatButton>BLOG</FlatButton>
                  </Col>
                  <Col md="2">
                    <FlatButton>LOGIN</FlatButton>
                  </Col>
                  <Col md="2">
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
