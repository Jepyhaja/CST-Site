import React, {Component} from 'react';
import DisplayPlaces from '../DisplayPlaces/DisplayPlaces';

const Paragraphs = props =>{
    const style = 'paragraph';
    let p1;
    if(props.array.Text.p1){
        p1 = <p className={style + ' mt-4'}>{props.array.Text.p1}</p>
    }
    return p1
}

const ImportantPlacesButtons = props =>{
    if(!props.array){
        return null
    }else{
        let Component = [];
        let ToggleComponent = [];
        for(let i=0;i<props.array.length;i++){
            Component.push(<button key={i} className="btn btn-secondary mt-4" onClick={props.popUp}>{props.array[i].Name}</button>);
            ToggleComponent.push(<DisplayPlaces key={i} status={props.status} name={props.array[i].Name} ClosePopUp={props.ClosePopUp} content={props.array[i].Text}/>)
        }
        return  <div className="col-md-6 order-lg-4">
                    {ToggleComponent}
                    <h3>Tärkeät paikat</h3>
                    {Component}
                </div>
    }
}

class TxtImgBtn extends Component {
    state = {
        showPlace: 'false',
        dim: ''
    }
    scrollToTop = () =>{
        this.ClosePopUp();
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop);
        if (top > 0) {
            window.scrollTo(0, top - 250)
            setTimeout(this.scrollToTop, 1)
        }
    }
    popUp = () =>{
        this.setState({
            showPlace: 'true',
        });
    }
    ClosePopUp = () =>{
        this.setState({
            showPlace: 'false',
        });
    }

    render() {

        if(!this.props.name){
            return null;
        }
      return (
        <div>
            <div id={this.props.name} className="row pt-5 mb-5 ">
                <div className="col-12"><h2>{this.props.array.Name}</h2></div>
                    <div className="col-lg-1 order-1"></div>
                    <ImportantPlacesButtons array={this.props.array.ImportantPlaces} popUp={this.popUp} ClosePopUp={this.ClosePopUp} status={this.state.showPlace}/>
                    <div className={"col-12 col-md-6 col-lg-4 "+ this.props.imageStyle}>
                        <img className="img-fluid country" src={"/Images/"+this.props.type+"/"+this.props.name+".png"} alt={this.props.name}/>
                    </div>
                    <div className={"col-md-12 col-lg-5 col-xl-4 "+ this.props.textStyle}>
                        <Paragraphs array={this.props.array}/>
                    </div>
                <div className="col order-5"></div>
                <div className="col-12 pt-5 order-6"><button className="btn btn-secondary" onClick={this.scrollToTop}>Takaisin ylös</button></div>
            </div>
        </div>
      );
    }
}
  
export default TxtImgBtn;