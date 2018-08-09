import React, {Component} from 'react';

const Content = props =>{
    console.log(props.img);
    let component = [];
    if(props.img.img1){
        component.push(<img className="floatL img" src={"/Images/"+props.location+"/"+props.img.img1} alt={props.img.img1}/>)
    }
    if(props.text.p1){
        component.push(props.text.p1)
    }
    if(props.text.p2){
        component.push(<br/>);
        component.push(<br/>);
        component.push(props.text.p2);
    }
    if(props.img.img2){
        component.push(<img className="floatR img" src={"/Images/"+props.location+"/"+props.img.img2} alt={props.img.img2}/>)
    }
    if(props.text.p3){
        component.push(<br/>);
        component.push(<br/>);
        component.push(props.text.p3);
    }
    if(props.img.img3){
        component.push(<img className="floatR img" src={"/Images/"+props.location+"/"+props.img.img3} alt={props.img.img3}/>)
    }
    return <p className="paragraph floatR">{component}</p>;
}

class DisplayPlaces extends Component {
    
    render() {
      if(this.props.status === 'false'){
          return null;
      }
      if(this.props.status1 === 'false'){
        return null;
    } 
      return (
        <div className="container-fluid displayPlaces">
            <div className="row">
                <div className="col"></div>
                <div className="col-12 col-md-8 col-lg-6 col-xl-8">
                    <div className="container-fluid popUp toTop">
                        <div className="row">
                            <h3 className="col-12">{this.props.name}<span className="close-btn floatR" onClick={this.props.ClosePopUp}>X</span></h3>
                            <div className="col-12 text-left pt-2">
                                <Content text={this.props.content.Text} img={this.props.content.Img} location={this.props.location}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col"></div>
            </div>
            <div className="dimOn" onClick={this.props.ClosePopUp}></div>
        </div>
      );
    }
}
  
  export default DisplayPlaces;