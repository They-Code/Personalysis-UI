import React, { Component } from 'react';
import './styles/common.css';

// material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// react-router
import { 
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

// custom components
import Home from './components/Home.js';
import Login from './components/Login.js';
import ProfilePage from './components/ProfilePage.js';

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
