import React, {Component} from 'react';
import EmailForm from './EmailForm';

class FanMail extends Component {
    render() {
      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col"></div>
              <div className="col-xl-4 col-lg-6 col-md-8 col-sm-12">
                <EmailForm/>
              </div>
            <div className="col"></div>
          </div>
        </div>
      );
    }
  }
  
  export default FanMail;