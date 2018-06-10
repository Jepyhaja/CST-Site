import React, { Component } from 'react';
import About from './Components/About/About';
import Nav from './Components/Navigation/Nav';
import FanMail from './Components/FanMail/FanMail';
import Comic from './Components/Comic/Comic';
import NotFound from './Components/Error/NotFound';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <Router>
        <div className="text-center">
            <Nav />
            <Switch>
              <Route path="/about" component={About}/>
              <Route path="/fanmail" component={FanMail}/>
              <Route path="/comic" component={Comic}/>
              <Route component={NotFound}/>
            </Switch>
        </div>
      </Router>
    );
  }
}

export default Home;
