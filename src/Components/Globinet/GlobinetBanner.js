import React, {Component} from 'react';

class GlobinetBanner extends Component {
    render() {
        console.log(this.props.countries)
      return (
          <div className="row pt-5 pb-5">
            <div className="col"></div>
            <div className="col-12 col-lg-8"><img className="img-fluid" src="/Images/Banner/Globinet.png" alt=""/></div>
            <div className="col"></div>
          </div>
      );
    }
}
  
  export default GlobinetBanner;