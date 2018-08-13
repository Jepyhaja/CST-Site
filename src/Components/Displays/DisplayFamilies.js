import React, {Component} from 'react';

const Text = props => {
    let Component = []
    for(let i=0;i<props.text.length;i++){
        Component.push(<p className="paragraph">{props.text[i]}</p>);
    }
    return Component;
}

class DisplayFamilies extends Component {
    render() {
      return (
        <div> 
            <div className="row pt-5">
                <div className="col">
                    <h2>{this.props.header}</h2>
                </div>
            </div>
            <div className="row pt-4 pb-3">
                <div className="col"></div>
                <div className="col-md-4 col-lg-4 pt-3 d-none d-md-block pb-2"><img className="img-fluid" src={"/Images/Yhteiskunta/"+this.props.header+".png"} alt=""/></div>
                <div className="col"></div>
                <div className="col-xl-6"><Text text={this.props.text}/></div>
                <div className="col-1"></div>
            </div>
        </div>
      );
    }
}
  
  export default DisplayFamilies;