import React, {Component} from 'react';
import DisplayFamilies from '../Displays/DisplayFamilies';

const data = require('./Regals.json');

const swapProps = props => {
    console.log(props.name);
}
const Images = props => {
    let Component = [];
    for(let i=0;i<props.data.length;i++){
        
        Component.push(<div key={i} className="col-2 col-xl-2"><img className="img-fluid" src={"/Images/Yhteiskunta/"+props.data[i].name+".png"} alt="" onClick={() => swapProps(props.data[i])}/></div>);
    }
    return Component;
}

class Regals extends Component {
    render() {
      return (
        <div>
            <div className="row pt-3">
                <div className="col-12">
                    <h2>Aateliset</h2>
                </div>
            </div>
            <div className="row pt-3 pb-5">
                <div className="col"></div>
                <div className="col-md-6">
                <iframe title="aateliset" width="560" height="315" src="https://www.youtube.com/embed/h-YabwBiPxk" frameBorder="0" allow="encrypted-media" allowFullScreen></iframe>
                </div>
                <div className="col"></div>
            </div>
            <div className="row">
                <div className="col"></div>
                <Images data={data.Family} swapProps={swapProps}/>
                <div className="col"></div>
            </div>
            <DisplayFamilies/>
        </div>
      );
    }
}
  
  export default Regals;