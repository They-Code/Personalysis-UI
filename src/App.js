import React, { Component } from 'react';
import './styles/common.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

// custom components
import Home from './components/Home.js';
import Login from './components/Login.js';
import ProfilePage from './components/ProfilePage.js';

/**
 * Binds props to a Component
 * Use to bind props for Route Components
 * @param {React.Component} Component - component to bind props to
 * @param {Object} props - props to bind to Component
 * @returns {Function} - function to be passed to the Route component
 */
const withProps = (Component, props) => {
  return (matchProps) => <Component {...props} {...matchProps} />;
};

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <Router>
                <div>
                    <Route exact path='/' component={Home} />
                    <Route path='/about' render={() => <h1>About</h1>} />
                    <Route path='/login' component={Login} />
                    <Route path='/profile' component={ProfilePage} />
                </div>
                </Router>
            </MuiThemeProvider>
        );
    }
}

export default App;
