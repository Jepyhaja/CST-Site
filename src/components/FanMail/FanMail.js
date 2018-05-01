import React, {Component} from 'react';
import EmailForm from './EmailForm';

class FanMail extends Component {
    render() {
      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col"></div>
              <div className="col-lg-4 col-xs-12">
                <EmailForm/>
              </div>
            <div className="col"></div>
          </div>
        </div>
      );
    }
  }
  
  export default FanMail;