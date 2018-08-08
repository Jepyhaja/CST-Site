import React, {Component} from 'react';

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
                <div className="card col-12 toTop">
                    <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8"><h3>{this.props.name}</h3></div>
                    <div className="col-2 text-right">
                        <button className="btn btn-danger" onClick={this.props.ClosePopUp}>
                            <span>X</span>
                        </button>
                    </div>

                    </div>
                    <div className="text-left">
                    <p className="paragraph floatR"><img className="floatL img" src="/Images/Hahmot/Baby-lynx.png" alt=""/>{this.props.content}</p>
                    </div>
                </div>
                <div className="col"></div>
            </div>
        </div>
      );
    }
}
  
  export default DisplayPlaces;