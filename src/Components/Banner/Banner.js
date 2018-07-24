import React, {Component} from 'react';


class Banner extends Component {
    render() {
      return (
        <div>
            <div className="row pt-3">
                <div className="col-1"></div>
                <div className="col-10"><h1>{this.props.header}</h1></div>
                <div className="col-1"></div>   
            </div>
            <div className="row pt-2">
                <div className="col-1"></div>
                <div className="col-10">
                    <img className="img-fluid" src={"/Images/Banner/"+this.props.name+".png"} alt={this.props.name}/>
                </div>
                <div className="col-1"></div>
            </div>
        </div>
      );
    }
}
  
  export default Banner;