import React, { Component } from 'react';
import About from './Components/About/About';
import Nav from './Components/Navigation/Nav';
import FanMail from './Components/FanMail/FanMail';
import Comic from './Components/Comic/Comic';
import NotFound from './Components/Error/NotFound';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <Router>
        <div>
            <Nav />
            <Route path="/about" component={About}/>
            <Route path="/fanmail" component={FanMail}/>
            <Route path="/comic" component={Comic}/>
            <Route path={"/error"} component={NotFound}/>
        </div>
      </Router>
    );
  }
}

export default Home;
