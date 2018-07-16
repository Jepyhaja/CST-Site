import React, { Component } from 'react';
import Home from './Components/Home/Home'
import About from './Components/About/About';
import Nav from './Components/Navigation/Nav';
import FanMail from './Components/FanMail/FanMail';
import Comic from './Components/Comic/Comic';
import NotFound from './Components/Error/NotFound';
import {
  Route,
  Switch
} from 'react-router-dom';
import './app.css';

class App extends Component {
  render() {
    return (
        <div className="text-center">
            <Nav />
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/fanmail" component={FanMail}/>
              <Route path="/comic" component={Comic}/>
              <Route component={NotFound}/>
            </Switch>
        </div>
    );
  }
}

export default App;
