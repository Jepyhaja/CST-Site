import React, {Component} from 'react';

const Content = props =>{
    let component = [];
    if(props.content.p1 !== null){
        component.push(<p className="paragraph floatR"><img className="floatL img" src="/Images/Hahmot/Baby-Lynx.png" alt=""/>{props.content.p1}</p>)
    }if(props.content.p1 !== null){
        component.push(<p className="paragraph">{props.content.p2}</p>)
    }
    return component;
}

class DisplayPlaces extends Component {
    
    render() {
      if(this.props.status === 'false'){
          return null;
      } 
      return (
        <div className="container-fluid displayPlaces">
        <div className="dimOn" onClick={this.props.ClosePopUp}></div>
            <div className="row center">
                <div className="col"></div>
                <div className="col-12">
                    <div className="card toTop container-fluid">
                        <div className="row">
                            <div className="col"></div>
                            <div className="col-12 bg-white"><h3 className="fixed-head">{this.props.name}</h3></div>
                            <div className="col text-right">
                                <span className="close-btn" onClick={this.props.ClosePopUp}>
                                    X
                                </span>
                            </div>
                        </div>
                        <div className="text-left pt-5">
                            <Content content={this.props.content}/>
                        </div>
                    </div>
                </div>
                <div className="col"></div>
            </div>
        </div>
      );
    }
}
  
  export default DisplayPlaces;