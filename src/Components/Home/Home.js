import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom';
const data = require('./HomeText.json');

class Home extends Component {
  componentDidMount(){
    window.scrollTo(0,0);
  }
    render() {
      return (
        <div className="bg-img-home">
          <div className="container">
            <div className="row pt-5 pb-5">
              <div className="col"></div>
              <div className="col-xs-12 col-md-12 col-lg-10 col-xl-10">
                <img className="img-fluid" src="/Images/Home/cst-blogo.png" alt="CST Charlie's Surfing Team"/>
              </div>
              <div className="col"></div>
            </div>
            <div className="row pb-5">
              <div className="col-3 col-lg order-md-4"></div>
              <div className="col-6 col-md-4 col-lg-3 pb-1 pt-5 order-md-5">
                <Link to="/comic"><img className="img-fluid saturate" src="/Images/Links/linkki-sarjakuva-vaaka.png" alt="Linkki sarjakuvaan"/></Link>
              </div>
              <div className="col-3 col-lg order-md-6"></div>
              <div className="col-3 col-lg-2 pb-1 pt-2 order-md-1"></div>
              <div className="col-xs-12 col-md-12 col-lg-8 col-xl-8 order-md-2">
                <p className="paragraph">{data.Comic}</p>
              </div>
              <div className="col-xs-12 col-md-1 col-lg-2 col-xl-2 order-md-3"></div>
            </div>
          </div>
          <div className="container-fluid bg-color-darkergray pt-5 pb-5">
          <div className="bg-img-home2">
            <div className="row pb-4">
              <div className="col-12">
                <h2>Tutustu Globinetiin ja sen yhteiskuntaan</h2>
              </div>
            </div>
            <div className="row pt-2">
              <div className="col d-none d-lg-block col-lg-3 order-md-3"></div>
              <div className="col order-md-4"></div>
              <div className="col-4 col-md-3 col-lg-2 order-md-5">
                <Link to="/world/globinet"><img className="img-fluid saturate" src="/Images/Links/linkki-globinet-vaaka.png" alt="päähenkilöt linkki"/></Link>
              </div>
              <div className="col order-md-6"></div>
              <div className="col-4 col-md-3 col-lg-2 order-md-7">
                <Link to="/world/society"><img className="img-fluid saturate" src="/Images/Links/linkki-yhteiskunta-vaaka.png" alt="tärkeät hahmot linkki"/></Link>
              </div>
              <div className="col order-md-8"></div>
              <div className="col-lg-3 d-none d-lg-block order-md-1"></div>
              <div className="col-12 col-lg-6 order-md-2 pt-3">
                <p className="paragraph">{data.World.text}</p>
                <p className="paragraph">{data.World.cit}</p>
              </div>
            </div>
            <div className="row pb-4 pt-5">
              <div className="col-12">
                <h2>Tutustu sarjakuvan hahmoihin</h2>
              </div>
            </div>
            <div className="row pt-2">
              <div className="col d-none d-lg-block col-lg-3 order-md-3"></div>
              <div className="col order-md-4"></div>
              <div className="col-4 col-md-3 col-lg-2 order-md-5">
                <Link to="/Chars/Protagonists"><img className="img-fluid saturate" src="/Images/Links/linkki-paahenkilot-vaaka.png" alt="päähenkilöt linkki"/></Link>
              </div>
              <div className="col order-md-6"></div>
              <div className="col-4 col-md-3 col-lg-2 order-md-7">
                <Link to="/Chars/Supports"><img className="img-fluid saturate" src="/Images/Links/linkki-tarkeathahmot-vaaka.png" alt="tärkeät hahmot linkki"/></Link>
              </div>
              <div className="col order-md-8"></div>
              <div className="col-lg-3 d-none d-lg-block order-md-1"></div>
              <div className="col-12 col-lg-6 order-md-2 pt-3">
                <p className="paragraph">{data.Characters.text}</p>
                <p className="paragraph">{data.Characters.cit}</p>
              </div>
            </div>
            <div className="row pb-4 pt-5">
              <div className="col-12">
                <h2>Tutustu CST:hen ja meihin</h2>
              </div>
            </div>
            <div className="row pt-2">
              <div className="col d-none d-lg-block col-lg-3 order-lg-3"></div>
              <div className="col order-md-4"></div>
              <div className="col-4 col-md-3 col-lg-2 order-md-5">
                <Link to="/cst"><img className="img-fluid saturate" src="/Images/Links/linkki-cst-vaaka.png" alt="Cst esittely linkki"/></Link>
              </div>
              <div className="col order-md-6"></div>
              <div className="col-lg-3 d-none d-lg-block order-md-1"></div>
              <div className="col-12 col-lg-6 order-md-2 pt-3">
                <p className="paragraph">{data.CST.text}</p>
                <p className="paragraph">{data.CST.cit}</p>
              </div>
            </div>
          </div>
          </div>
        </div>
      );
    }
  }
  
  export default Home;