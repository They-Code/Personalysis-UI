import React, { Component } from 'react';
import './styles/common.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Home from './components/Home.js';
import Login from './components/Login.js';
import { 
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div>
            <Route exact path='/' component={Home} />
            <Route path='/about' render={() => <h1>About</h1>} />
            <Route path='/login' component={Login} />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
