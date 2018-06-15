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
            <div className="col-xs-12 col-md-12 col-lg-8 col-xl-5">
              <img className="img-fluid" src="/Images/Home/cst-blogo.png" alt="CST Charlie's Surfing Team"/>
            </div>
            <div className="col"></div>
          </div>

            <div className="row pt-2">
                <div className="col-lg-1 col-sm-0"></div>
                <div className="col-xs-12 col-md-4 col-lg-3 col-xl-2">
                  <Link to="/comic"><img className="img-fluid" src="/Images/Home/linkki-sarjis-lappu.png" alt="Linkki sarjakuvaan"/></Link>
                  <Link to="/comic"><img className="img-fluid" src="/Images/Home/linkki-tekijät-lappu.png" alt="Linkki sarjakuvaan"/></Link>  
                  <Link to="/comic"><img className="img-fluid" src="/Images/Home/linkki-hahmot-lappu.png" alt="Linkki sarjakuvaan"/></Link>
                </div>
                <div className="col-xs-12 col-md-6">
                </div>
                <div className="col-xs-12 col-md-3">
                </div>
            </div>
            <div className="row pt-5 pb-3">
                <div className="col-xs-12 col-md-4">
                </div>
                <div className="col-sm-12 col-md-3">
                    </div>
                <div className="col-xs-12 col-md-5">
                  
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default Home;