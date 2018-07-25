import React, {Component} from 'react';
import ImgsAndAnchor from '../ImgsAndAnchor/ImgsAndAnchor';

class Banner extends Component {
    render() {
      return (
        <div>
            <div className="row pt-3">
                <div className="col-1"></div>
                <div className="col-10"><h1>{this.props.header}</h1></div>
                <div className="col-1"></div>   
            </div>
            <div className="row">
                <div className="col"></div>
                <div className="col-2"><ImgsAndAnchor name="Weasel"/></div>
                <div className="col"></div>
                <div className="col-2"><ImgsAndAnchor name="Veera"/></div>
                <div className="col"></div>
                <div className="col-2"><ImgsAndAnchor name="Sose-tonttu"/></div>
                <div className="col"></div>
            </div>
            <div className="row">
                <div className="col"></div>
                <div className="col-2"><ImgsAndAnchor name="WR"/></div>
                <div className="col"></div>
                <div className="col-2"><ImgsAndAnchor name="Taalatasku"/></div>
                <div className="col"></div>
                <div className="col-2"><ImgsAndAnchor name="Prinssi"/></div>
                <div className="col"></div>
                <div className="col-2"><ImgsAndAnchor name="Tyger"/></div>
                <div className="col"></div>
            </div>
            <div className="row">
                <div className="col"></div>
                <div className="col-2"><ImgsAndAnchor name="Baby-Lynx"/></div>
                <div className="col"></div>
                <div className="col-2"><ImgsAndAnchor name="Herhilainen"/></div>
                <div className="col"></div>
                <div className="col-2"><ImgsAndAnchor name="Tuhkis"/></div>
                <div className="col"></div>
            </div>
        </div>
      );
    }
}
  
  export default Banner;