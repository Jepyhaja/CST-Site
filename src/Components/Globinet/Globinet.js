import React, {Component} from 'react';
import GlobinetBanner from './GlobinetBanner';
import TxtImgBtn from '../TxtImgBtn/TxtImgBtn';
import './globinet.css';
const Data = require('./CountryTexts.json');

const CountryDetails = props =>{
    let wrappedComponents = [];
    for(let i=0;i<props.Continents.length;i++){
        let components = [];
        const Continents = props.getContinents(props.Continents[i]);
        for(let j=0;j<Continents.Countries.length;j++){
                if(j % 2 === 0){
                    components.push(<TxtImgBtn key={j} type={'Globinet'} textStyle={props.StyleRight}   imageStyle={props.StyleLeft}  name={Continents.Countries[j].Name} array={Continents.Countries[j]}/>)
                }else{
                    components.push(<TxtImgBtn key={j} type={'Globinet'} textStyle={props.StyleLeft}   imageStyle={props.StyleRight}  name={Continents.Countries[j].Name} array={Continents.Countries[j]}/>)
                }
        }
        wrappedComponents.push(
            <div key={i}>
                <div key={i} id={Continents.id} className="row">
                    <div className="col-12"><h1>{Continents.id}</h1></div>
                </div>
                {components}
            </div>);
    }
    return wrappedComponents
  }

class Globinet extends Component {
    componentDidMount(){
        window.scrollTo(0,0);
      }
    getContinents = (continent) => {
        let ContinentArray = Data.Continents;
        for(let i=0;i<ContinentArray.length; i++){
          if(ContinentArray[i].id === continent){
            return ContinentArray[i]  
          }
        }
    }
    render() {
        const continents = ['A-Lox','B-Lox','C-Lox','D-Lox'];
      return (
          <div className="container-fluid">
            <GlobinetBanner header={'Globinet'} data={Data.Continents}/>
            <CountryDetails getContinents={this.getContinents} type={'Globinet'} StyleRight={"order-lg-2"}  StyleLeft={"order-lg-3"} Continents={continents}/>
          </div>
      );
    }
}
  
  export default Globinet;