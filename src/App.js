import React, { Component } from 'react';
import Home from './Components/Home/Home'
import About from './Components/About/About';
import Nav from './Components/Navigation/Nav';
import FanMail from './Components/FanMail/FanMail';
import Comic from './Components/Comic/Comic';
import NotFound from './Components/Error/NotFound';
import MainCharacters from './Components/Characters/MainCharacters';
import SupportCharacters from './Components/Characters/SupportCharacters';
import Globinet from './Components/Globinet/Globinet';
import Society from './Components/Society/Society';
import Footer from './Components/Footer/Footer';
import Media from './Components/Media/Media';
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
              <Route path="/cst" component={About}/>
              <Route path="/fanmail" component={FanMail}/>
              <Route path="/comic" component={Comic}/>
              <Route path="/world/globinet" component={Globinet}/>
              <Route path="/world/society" component={Society}/>
              <Route path="/chars/protagonists" component={MainCharacters}/>
              <Route path="/chars/supports" component={SupportCharacters}/>
              <Route path="/media" component={Media}/>
              <Route component={NotFound}/>
            </Switch>
            <Footer />
        </div>
    );
  }
}

export default App;
