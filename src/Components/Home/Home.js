import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom';
import './home.css';

class Home extends Component {
    render() {
      return (
        <div>
          <div className="container-fluid">
            <div className="row pt-4">
              <div className="col"></div>
              <div className="col-xs-12 col-md-12 col-lg-8 col-xl-6 pb-5">
                <img className="img-fluid" src="/Images/Home/cst-blogo.png" alt="CST Charlie's Surfing Team"/>
              </div>
              <div className="col"></div>
            </div>
            <div className="row pb-5">
              <div className="col order-md-4"></div>
              <div className="col-4 col-md-3 col-lg-2 pb-1 pt-2 order-md-5">
                <Link to="/comic"><img className="img-fluid saturate" src="/Images/Links/linkki-sarjis-vaaka.png" alt="Linkki sarjakuvaan"/></Link>
              </div>
              <div className="col order-md-6"></div>
              <div className="col-xs-12 col-md-3 col-lg-2 col-xl-2 order-md-1">
                <img className="img-fluid mobile-hide absolute" src="/Images/Home/adrian.png" alt="Adrian"/>
              </div>
              <div className="col-xs-12 col-md-8 col-lg-8 col-xl-8 order-md-2">
                <p className="paragraph">
                “‘After lifen' käsite saa uuden merkityksen 15- vuotiaan Howien paiskautuessa itsemurhansa yhteydessä vuosikymmeniä taaksepäin. 
                Robottisodan uhka väreilee ilmassa, mutta onneksi Team Barracuda - erikoisoperaatioon valikoituu vain kymmenen parasta miestä - 
                tai naista tai määrittelemätöntä. Vuorien takana liskokansa heräilee satojen vuosien hiljaiselon jälkeen. 
                Myös banaaniviidakon siimeksessä unohdettu villiheimo nostaa päätään ensimmäisen kerran sitten surullisenkuuluisan tohtori Deadrockin tutkimusretken. 
                Robottien kanssa yhteen ottaneen Lynxtonien aatelissuvun viimeiseksi jäänyt Adrian teroittaa kyntensä ja on valmiina kostoon - 
                kunhan armeijan hernekeittoa saa myös gluteiinittomana.”
                </p>
              </div>
              <div className="col-xs-12 col-md-1 col-lg-2 col-xl-2 order-md-3"></div>
            </div>
          </div>
          <div className="container-fluid bg-color-darkergray pt-5">
            <div className="row pb-4">
              <div className="col-12">
                <h2>Katsaus sarjakuvan maailmaan</h2>
              </div>
            </div>
            <div className="row pt-2">
            <div className="col order-md-2"></div>
              <div className="col-4 col-md-3 col-lg-2 order-md-3">
                <Link to="/world/globinet"><img className="img-fluid saturate" src="/Images/Links/linkki-globinet-vaaka.png" alt="Globinet linkki"/></Link>
              </div>
              <div className="col col-lg-1 order-md-4"></div>  
              <div className="col-4 col-md-3 col-lg-2 order-md-5">
                <Link to="/world/society"><img className="img-fluid saturate" src="/Images/Links/linkki-yhteiskunta-vaaka.png" alt="Yhteiskunta linkki"/></Link>
              </div>
              <div className="col order-md-6"></div>
              <div className="col-12 order-md-1">
                <p className="paragraph">Tähän joku johdatteleva teksti yhteiskuntaan ja maailmaan liittyen</p>
              </div>
            </div>
              <div className="col-xs-12 col-md-12 col-lg-4 col-xl-4">
              <h3>Hahmot</h3>
              </div>
              <div className="col-xs-12 col-md-12 col-lg-4 col-xl-4">
              <h3>Tekijät</h3>
              </div>
            </div>
        </div>
      );
    }
  }
  
  export default Home;