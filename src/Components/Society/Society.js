import React, {Component} from 'react';
import ClassTriangle from './ClassTriangle';
import Regals from './Regals';


class Society extends Component {
    componentDidMount(){
        window.scrollTo(0,0);
    }
    render() {
      return (
          <div className="container-fluid pt-5">
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