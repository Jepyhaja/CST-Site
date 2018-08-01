import React, {Component} from 'react';
import CharsBanner from './CharsBanner';
import TextAndImg from '../TextAndImage/TextAndImg';
import './characters.css';
const Data = require('./CharTexts.json');

const CharacterDetails = props =>{
  let components = [];
  for(let i=0;i<props.char.length;i++){
    const array = props.getTxt(props.char[i])
    if(i % 2 === 0){
      components.push(<TextAndImg type={props.type} textStyle={props.StyleRight}   imageStyle={props.StyleLeft}  name={props.char[i]} char={array}/>)
    }else{
      components.push(<TextAndImg type={props.type} textStyle={props.StyleLeft}   imageStyle={props.StyleRight}  name={props.char[i]} char={array}/>)
    }
  }
  return components
}

class Characters extends Component {
  getTxt = (name) => {
    var CharArray = Data.Chars;
    for(let i=0;i<CharArray.length; i++){
      if(CharArray[i].id === name){
        return CharArray[i]  
      }
    }
  }
  
  componentDidMount(){
    window.scrollTo(0,0);
  }
    render() {
      return (
          <div className="container-fluid">
            <CharsBanner header={this.props.type} name={this.props.chars}/>
            <CharacterDetails getTxt={this.getTxt} type={this.props.type} StyleRight={this.props.StyleRight}  StyleLeft={this.props.StyleLeft}   char={this.props.chars}/>
          </div>
      );  
    }
}
  
  export default Characters;