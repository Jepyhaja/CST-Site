import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom';
import './home.css';

class Home extends Component {
    render() {
      return (
        <div className="container-fluid">
          <div className="row pt-5">
            <div className="col"></div>
            <div className="col-xs-12 col-md-12 col-lg-8 col-xl-6">
              <img className="img-fluid" src="/Images/Home/cst-blogo.png" alt="CST Charlie's Surfing Team"/>
            </div>
            <div className="col"></div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-md-4 col-lg-3 col-xl-2">
              <img className="img-fluid mobile-hide" src="/Images/Home/adrian.png" alt="Adrian"/>
            </div>
            <div className="col-xs-12 col-md-8 col-lg-7 col-xl-8 pt-5">
              <p className="paragraph">
              “‘After lifen' käsite saa uuden merkityksen 15- vuotiaan Howien paiskautuessa itsemurhansa yhteydessä vuosikymmeniä taaksepäin. 
              Robottisodan uhka väreilee ilmassa, mutta onneksi Team Barracuda - erikoisoperaatioon valikoituu vain kymmenen parasta miestä - 
              tai naista tai määrittelemätöntä. Vuorien takana liskokansa heräilee satojen vuosien hiljaiselon jälkeen. 
              Myös banaaniviidakon siimeksessä unohdettu villiheimo nostaa päätään ensimmäisen kerran sitten surullisenkuuluisan tohtori Deadrockin tutkimusretken. 
              Robottien kanssa yhteen ottaneen Lynxtonien aatelissuvun viimeiseksi jäänyt Adrian teroittaa kyntensä ja on valmiina kostoon - 
              kunhan armeijan hernekeittoa saa myös gluteiinittomana.”
              </p>
              <li className="list-inline-item pt-2 pb-3"><Link to="/comic"><img className="img-fluid" src="/Images/Home/linkki-sarjis-vaaka.png" alt="Linkki sarjakuvaan"/></Link></li>
            </div>
            <div className="col">
            
            </div>
          </div>
          
          <div className="row pt-2">
            <div className="col-12">
            <h2>Tutustu sarjakuvan maailmaan ja hahmoihin</h2>
            </div>
          </div>
          <div className="row pt-2">
            <div className="col-4">
            <h3>Maailma</h3>
            </div>
            <div className="col-4">
            <h3>Hahmot</h3>
            </div>
            <div className="col-4">
            <h3>Tekijät</h3>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default Home;