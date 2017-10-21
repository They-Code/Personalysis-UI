import React, { Component } from 'react';
import './styles/common.css';
import Login from './components/Login.js';
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
        </div>
      </Router>
    );
  }
}

export default App;
