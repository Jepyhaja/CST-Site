import React, {Component} from 'react';
import GlobinetBanner from './GlobinetBanner';
import TextAndImg from '../TextAndImage/TextAndImg';
const Data = require('./CountryTexts.json');

const CountryDetails = props =>{
    let wrappedComponents = [];
    for(let i=0;i<props.Continents.length;i++){
        let components = [];
        const Continents = props.getContinents(props.Continents[i]);
        for(let j=0;j<Continents.Countries.length;j++){
                if(j % 2 === 0){
                    components.push(<TextAndImg key={j} type={props.type} textStyle={props.StyleRight}   imageStyle={props.StyleLeft}  name={Continents.Countries[j].Name} array={Continents.Countries[j]}/>)
                }else{
                    components.push(<TextAndImg key={j} type={props.type} textStyle={props.StyleLeft}   imageStyle={props.StyleRight}  name={Continents.Countries[j].Name} array={Continents.Countries[j]}/>)
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
    getContinents = (continent) => {
        var ContinentArray = Data.Continents;
        for(let i=0;i<ContinentArray.length; i++){
          if(ContinentArray[i].id === continent){
            return ContinentArray[i]  
          }
        }
    }
    render() {
        const continents = ['A-lox','B-lox','C-lox','D-lox'];
      return (
          <div className="container-fluid">
            <GlobinetBanner header={'Globinet'} countries={Data.Continents}/>
            <CountryDetails getContinents={this.getContinents} type={'Globinet'} StyleRight={"order-lg-2"}  StyleLeft={"order-lg-3"} Continents={continents}/>
          </div>
      );
    }
}
  
  export default Globinet;