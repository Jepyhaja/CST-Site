import React, {Component} from 'react';

const data = require('./ClassTriangle.json');

class ClassTriangle extends Component {
    render() {
      return (
        <div>
            <div className="row">
                <div className="col-12">
                    <h2 className="pt-3">Yhteiskunnan luokat</h2>
                </div>
            </div>    
            <div className="row pt-3 pb-2">    
                <div className="col-12 col-lg-4"><h3 className="pb-3 pt-4">{data.section[2].header}</h3><p className="paragraph">{data.section[2].text}</p></div>
                <div className="col-12 col-lg-4"><img className="img-fluid" src="/Images/Yhteiskunta/kolmio.png" alt="Luokkakolmio"/></div>
                <div className="col-12 col-lg-4"><h3 className="pb-3 pt-4">{data.section[1].header}</h3><p className="paragraph">{data.section[1].text}</p></div>
                <div className="col-lg-4"></div>
                <div className="col-lg-4"><h3 className="pb-3 pt-4">{data.section[0].header}</h3><p className="paragraph">{data.section[0].text}</p></div>
                <div className="col-lg-4"></div>
            </div>
        </div>    
      );
    }
}
  
  export default ClassTriangle;