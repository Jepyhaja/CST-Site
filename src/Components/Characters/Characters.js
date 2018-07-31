import React, {Component} from 'react';
import CharsBanner from './CharsBanner';
import TextAndImg from '../TextAndImage/TextAndImg';
import './characters.css';
const Data = require('./CharTexts.json');

const CharacterDetails = props =>{
  if(!props.name){
    return null;
  }
  const array = props.getTxt(props.name)
  return <TextAndImg type={props.type} textStyle={props.textStyle}   imageStyle={props.imageStyle}  name={props.name} char={array}/>
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
            <CharacterDetails getTxt={this.getTxt} type={this.props.type} textStyle={this.props.StyleRight}  imageStyle={this.props.StyleLeft}   name={this.props.chars[0]}/>
            <CharacterDetails getTxt={this.getTxt} type={this.props.type} textStyle={this.props.StyleLeft}   imageStyle={this.props.StyleRight}  name={this.props.chars[1]}/>
            <CharacterDetails getTxt={this.getTxt} type={this.props.type} textStyle={this.props.StyleRight}  imageStyle={this.props.StyleLeft}   name={this.props.chars[2]}/>
            <CharacterDetails getTxt={this.getTxt} type={this.props.type} textStyle={this.props.StyleLeft}   imageStyle={this.props.StyleRight}  name={this.props.chars[3]}/>
            <CharacterDetails getTxt={this.getTxt} type={this.props.type} textStyle={this.props.StyleRight}  imageStyle={this.props.StyleLeft}   name={this.props.chars[4]}/>
            <CharacterDetails getTxt={this.getTxt} type={this.props.type} textStyle={this.props.StyleLeft}   imageStyle={this.props.StyleRight}  name={this.props.chars[5]}/>
            <CharacterDetails getTxt={this.getTxt} type={this.props.type} textStyle={this.props.StyleRight}  imageStyle={this.props.StyleLeft}   name={this.props.chars[6]}/>
            <CharacterDetails getTxt={this.getTxt} type={this.props.type} textStyle={this.props.StyleLeft}   imageStyle={this.props.StyleRight}  name={this.props.chars[7]}/>
            <CharacterDetails getTxt={this.getTxt} type={this.props.type} textStyle={this.props.StyleRight}  imageStyle={this.props.StyleLeft}   name={this.props.chars[8]}/>
            <CharacterDetails getTxt={this.getTxt} type={this.props.type} textStyle={this.props.StyleLeft}   imageStyle={this.props.StyleRight}  name={this.props.chars[9]}/>
          </div>
      );  
    }
}
  
  export default Characters;