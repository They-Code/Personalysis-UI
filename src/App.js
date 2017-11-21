import React, { Component } from 'react';
import history from './history'
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
import Profile from './components/Profile.js';
import Carousel from './components/carousel/Carousel.jsx';
import Nav from './components/Nav.js';

// authentication
import Auth from './auth/Auth'
const auth = new Auth();
const {isAuthenticated} = auth
console.log(isAuthenticated())

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      profile:{},
      showNav: true, 
      loggedIn: isAuthenticated(),
      completedWatson: false // TODO: use a util function to query from database
    }

    this.appFunctions = {
      hideNav : () => {
        const {showNav} = this.state;
        this.setState( { showNav : false });
      },
      goTo : (route) => {
        history.replace(`/${route}`)
      },
      login: () => {
        auth.login()
        console.log("this is the login")
      },
      logout: () => {
        auth.logout()
      },
      signup: () => {
        auth.changeLockToSignup()
        auth.login()
      },
      getRedirectUrl: () => {
        
      }
    }
  }

  // TODO: Maybe at some point actually do routing to send appFunctions 
  //        with parent child relationsips
  render() {
    
    // This decides what our landing page will be depending on authentication
    var determineLanding = this.state.loggedIn ? 
    <Profile appFn={this.appFunctions} /> :
    <Home appFn={this.appFunctions}/>
    console.log(determineLanding)
    
    return (
      <MuiThemeProvider>
        <div>
        {/* Hide nav if a page doesnt want to see it*/}
        {this.state.showNav && 
          <Nav 
            appFn={this.appFunctions}
            isAuthenticated={isAuthenticated}
          />
        }
        <Router history={history}>
          <div>
            <Route exact path='/' 
              render={(props) => (determineLanding)}
            />
            <Route path='/about' render={() => <h1>About</h1>} />
            {/* TODO: A good idea may be to set the login as the actual auth page*/}
            <Route path='/login' component={Login} />
            {/*
            Disable this routing , since its handled with determineLanding
            For testing, re-enable?*/}
            <Route path='/profile' component={Profile} />

            <Route path='/questions' 
              render={(props) => (<Carousel appFn={this.appFunctions} {...props} />)} 
            />
          </div>
        
        </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

/*
<Route path='/'> // take to redirect.js if authenticated, if not, Home
<Switch>
  <Route path=
</Switch>
*/

export default App;
