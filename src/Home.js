import React, { Component } from 'react';
import About from './components/About';
import Nav from './components/Navigation/Nav';
import FanMail from './components/FanMail/FanMail';
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
        </div>
      </Router>
    );
  }
}

export default Home;
