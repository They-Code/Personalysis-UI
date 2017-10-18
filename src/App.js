import React, { Component } from 'react';
import './App.css';
import Login from './Login.js';
import Signup from './Signup.js';
import { 
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const Nav = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/login">Login</Link>
    <Link to="/signup">Signup</Link>
  </nav>
);

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Route exact path='/' render={() => <h1>Home</h1>} />
          <Route path='/about' render={() => <h1>About</h1>} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
        </div>
      </Router>
    );
  }
}

export default App;
