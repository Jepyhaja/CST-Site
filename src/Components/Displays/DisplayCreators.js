import React, {Component} from 'react';

class DisplayCreators extends Component {
    render() {
        console.log(this.props.data)
      return (
        <div>
            <div className="row pt-4">
                <div className="col-12"><h3>{this.props.data.a}</h3></div>
            </div>
            <div className="row pt-4">
                <div className="col"></div>
                <div className="col-4 pt-3"><img src={"/Images/CST/"+this.props.data.a+".png"} alt=""/></div>
                <div className="col"></div>
                <div className="col-5">
                    <ul className="list-group pb-3">
                        <li className="list-group-item text-left paragraph"><strong>Suosikkiasuste :</strong> {this.props.data.b}</li>
                        <li className="list-group-item text-left paragraph"><strong>Lempikukka :</strong> {this.props.data.c}</li>
                        <li className="list-group-item text-left paragraph"><strong>Lempiruoka :</strong> {this.props.data.d}</li>
                        <li className="list-group-item text-left paragraph"><strong>Paras elokuva :</strong> {this.props.data.e}</li>
                        <li className="list-group-item text-left paragraph"><strong>Paras sarjakuva :</strong> {this.props.data.f}</li>
                        <li className="list-group-item text-left paragraph"><strong>Hauskin juhlapäivä :</strong> {this.props.data.g}</li>
                        <li className="list-group-item text-left paragraph"><strong>Paras viikonpäivä :</strong> {this.props.data.h}</li>
                        <li className="list-group-item text-left paragraph"><strong>Kivoin vuodenaika :</strong> {this.props.data.j}</li>
                        <li className="list-group-item text-left paragraph"><strong>Lempikarkki :</strong> {this.props.data.k}</li>
                        <li className="list-group-item text-left paragraph"><strong>Hauskin peli :</strong> {this.props.data.l}</li>
                        <li className="list-group-item text-left paragraph"><strong>Onnennumero :</strong> {this.props.data.m}</li>
                        <li className="list-group-item text-left paragraph"><strong>Inhoan :</strong> {this.props.data.n}</li>
                    </ul>
                </div>
                <div className="col"></div>
            </div>
        </div>
      );
    }
}
export default DisplayCreators;