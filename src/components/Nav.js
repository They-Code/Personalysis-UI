import React, { Component } from 'react';
import '../styles/Nav.css';

import {
  Container,
  Row,
  Col,
} from 'muicss/react';

import {
  AppBar,
  FlatButton,
  RaisedButton,
  Popover,
  Menu,
  MenuItem,
} from 'material-ui';

import DropdownIcon from 'material-ui/svg-icons/navigation/arrow-drop-down';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownMenuOpen: false,
            authMenuOpen: false,
            loggedOut: !this.props.isAuthenticated()  //TODO: hook this to isAuthenticated
        };

        // button click handlers
        this.onTitleClick = this.onTitleClick.bind(this);
        this.onFeaturesButtonClick = this.onFeaturesButtonClick.bind(this);
        this.onContactButtonClick = this.onContactButtonClick.bind(this);
        this.onAboutUsButtonClick = this.onAboutUsButtonClick.bind(this);
        this.onBlogButtonClick = this.onBlogButtonClick.bind(this);
        this.onLoginButtonClick = this.onLoginButtonClick.bind(this);
        this.onSignUpButtonClick = this.onSignUpButtonClick.bind(this);
        this.onLogoutButtonClick = this.onLogoutButtonClick.bind(this);

        // popover handlers
        this.onNavMenuOpen = this.onNavMenuOpen.bind(this);
        this.authMenuOpen = this.authMenuOpen.bind(this);
        this.handlePopoverClose = this.handlePopoverClose.bind(this);
        this.handleNavMenuClose = this.handleNavMenuClose.bind(this);
        this.handleAuthMenuClose = this.handleAuthMenuClose.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', this.handlePopoverClose);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handlePopoverClose);
    }

    handlePopoverClose() {
        this.handleNavMenuClose();
        this.handleAuthMenuClose();
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
        this.props.appFn.login()
    }

    onSignUpButtonClick() {
        console.log('signup clicked');
        this.props.appFn.signup()
    }

    onLogoutButtonClick() {
        console.log('logout clicked');
        this.props.appFn.logout()
    }

    onNavMenuOpen(event) {
        // This prevents ghost click.
        event.preventDefault();

        this.setState({
            dropdownMenuOpen: true,
            anchorEl: event.currentTarget,
        });
    }

    authMenuOpen(event) {
        // This prevents ghost click.
        event.preventDefault();

        this.setState({
            authMenuOpen: true,
            authAnchorEl: event.currentTarget,
        });
    }

    handleNavMenuClose() {
        this.setState({
            dropdownMenuOpen: false,
        });
    };

    handleAuthMenuClose() {
        this.setState({
            authMenuOpen: false,
        });
    }

    render() {
        var showLoginComponents = this.state.loggedOut ? 
        <div className="button-group mui--hidden-xs">
            <div className="button">
                <FlatButton className="login-button" onClick={this.onLoginButtonClick}>LOGIN</FlatButton>
            </div>
            <div className="button">
                <RaisedButton className="signup-button" onClick={this.onSignUpButtonClick}>SIGN UP</RaisedButton>
            </div>
        </div>:
        <div className="button-group mui--hidden-xs">
            {/* TODO: insert replacement butons for when logged in */}
            <div className="button">
                <FlatButton className="logout-button" onClick={this.onLogoutButtonClick}>LOGOUT</FlatButton>
            </div>
        </div>



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
                                <Col xs="6" sm="6" md="8">
                                    <div className="popover mui--hidden-md mui--hidden-lg mui--hidden-xl">
                                        <DropdownIcon onClick={this.onNavMenuOpen}/>
                                        <Popover
                                            open={this.state.dropdownMenuOpen}
                                            anchorEl={this.state.anchorEl}
                                            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                                            targetOrigin={{horizontal: 'left', vertical: 'top'}}
                                            onRequestClose={this.handleNavMenuClose}
                                            >
                                            <Menu>
                                                <MenuItem primaryText="FEATURES" onClick={this.onFeaturesButtonClick} />
                                                <MenuItem primaryText="CONTACT" onClick={this.onContactButtonClick} />
                                                <MenuItem primaryText="ABOUT US" onClick={this.onAboutUsButtonClick} />
                                                <MenuItem primaryText="BLOG"  onClick={this.onBlogButtonClick} />
                                            </Menu>
                                        </Popover>
                                    </div>
                                    <div className="button-group mui--hidden-xs mui--hidden-sm">
                                        <div className="button">
                                        <FlatButton onClick={this.onFeaturesButtonClick}>FEATURES</FlatButton>
                                        </div>
                                        <div className="button">
                                        <FlatButton onClick={this.onContactButtonClick}>CONTACT</FlatButton>
                                        </div>
                                        <div className="button">
                                        <FlatButton onClick={this.onAboutUsButtonClick}>ABOUT US</FlatButton>
                                        </div>
                                        <div className="button">
                                        <FlatButton onClick={this.onBlogButtonClick}>BLOG</FlatButton>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs="6" sm="6" md="4" className="button-group auth">
                                    {showLoginComponents}
                                    <div className="popover mui--visible-xs-block">
                                        <MoreVertIcon onClick={this.authMenuOpen}/>
                                        <Popover
                                            open={this.state.authMenuOpen}
                                            anchorEl={this.state.authAnchorEl}
                                            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                                            targetOrigin={{horizontal: 'left', vertical: 'top'}}
                                            onRequestClose={this.handleAuthMenuClose}
                                        >
                                        <Menu>
                                            <MenuItem primaryText="LOGIN" onClick={this.onLoginButtonClick} />
                                            <MenuItem primaryText="SIGNUP" onClick={this.onSignUpButtonClick} />
                                        </Menu>
                                    </Popover>
                                    </div>
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
