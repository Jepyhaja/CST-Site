import React, {Component} from 'react';
import ImgsAndAnchor from '../ImgsAndAnchor/ImgsAndAnchor';



class CharsBanner extends Component {
    render() {
        let hide = '';
        let hideCol ='';
        let type = '';
        if(this.props.header === "Tärkeät henkilöt"){
            hide = 'd-hide';
            type = 'supports';
        }
        if(this.props.header !== "Tärkeät henkilöt"){
            hideCol = 'd-hide';
            type = 'protagonists'
        }
      return (
        <div className="pb-3">
            <div className="row pt-3 pb-4">
                <div className="col-1"></div>
                <div className="col-10"><h1>{this.props.header}</h1></div>
                <div className="col-1"></div>   
            </div>
            <div className="row">
                <div className="col"></div>
                <div className="col-3"><ImgsAndAnchor type={type} name={this.props.name[0]}/></div>
                <div className="col-3"><ImgsAndAnchor type={type} name={this.props.name[1]}/></div>
                <div className="col-3"><ImgsAndAnchor type={type} name={this.props.name[2]}/></div>
                <div className="col"></div>
            </div>
            <div className="row">
                <div className={"col" + hideCol}></div>
                <div className="col-3"><ImgsAndAnchor type={type} name={this.props.name[6]}/></div>
                <div className="col-3"><ImgsAndAnchor type={type} name={this.props.name[7]}/></div>
                <div className="col-3"><ImgsAndAnchor type={type} name={this.props.name[8]}/></div>
                <div className={"col-3" + hide}><ImgsAndAnchor type={type} name={this.props.name[9]}/></div>
                <div className={"col" + hideCol}></div>
            </div>
            <div className="row">
                <div className="col"></div>
                <div className="col-3"><ImgsAndAnchor type={type} name={this.props.name[3]}/></div>
                <div className="col-3"><ImgsAndAnchor type={type} name={this.props.name[4]}/></div>
                <div className="col-3"><ImgsAndAnchor type={type} name={this.props.name[5]}/></div>
                <div className="col"></div>
            </div>
        </div>
      );
    }
}
  
  export default CharsBanner;