import React, {Component} from 'react';
import ClassTriangle from './ClassTriangle';
import Regals from './Regals';


class Society extends Component {
    render() {
      return (
          <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <h1>Yhteiskunta</h1>
                </div>
            </div>
            <ClassTriangle header="Luokkakolmio"/>
            <Regals/>
          </div>
      );
    }
}
  
  export default Society;