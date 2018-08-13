import React, {Component} from 'react';
import DisplayFamilies from '../Displays/DisplayFamilies';

const data = require('./Regals.json');




class Regals extends Component {
    state = {
        header:'',
        text:[]
    }
    componentWillMount(){
        this.setState({
            header: data.Family[0].name,
            text: [data.Family[0].p1,data.Family[0].p2,data.Family[0].p3,data.Family[0].p4]
        })
    }
    render() {
        const Images = props => {
            let Component = [];
            for(let i=0;i<props.data.length;i++){
                
                Component.push(<div key={i} className="col-2 col-xl-1"><img className="img-fluid clickable" src={"/Images/Yhteiskunta/"+props.data[i].name+".png"} alt="" onClick={() => swapProps(props.data[i])}/></div>);
            }
            return Component;
        }
        const swapProps = props => {
            this.setState({
                text: [props.p1, props.p2, props.p3, props.p4],
                header: props.name
            })
        }

      return (
        <div>
            <div className="row pt-3">
                <div className="col-12">
                    <h2>Aatelissuvut</h2>
                </div>
            </div>
            <div className="row pt-3 pb-5">
                <div className="col"></div>
                <div className="col-md-6">
                <iframe title="aateliset" width="560" height="315" src="https://www.youtube.com/embed/LmpEvRY6G-I" frameBorder="0" allow="encrypted-media" allowFullScreen></iframe>
                <p className="hint">Lue alta lisää eri suvuista</p>
                </div>
                <div className="col"></div>
            </div>
            <div className="row">
                <div className="col"></div>
                <Images data={data.Family} swapProps={swapProps}/>
                <div className="col"></div>
            </div>
            <DisplayFamilies header={this.state.header} text={this.state.text}/>
        </div>
      );
    }
}
  
  export default Regals;