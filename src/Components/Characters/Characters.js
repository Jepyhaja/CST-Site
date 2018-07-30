import React, {Component} from 'react';
import CharsBanner from './CharsBanner';
import TextAndImg from '../TextAndImage/TextAndImg';
import './characters.css';


class Characters extends Component {
  componentDidMount(){
    window.scrollTo(0,0);
  }
    render() {
      return (
          <div className="container-fluid">
            <CharsBanner header={this.props.type} name={this.props.chars}/>
            <TextAndImg text={this.props.StyleRight} image={this.props.StyleLeft} name={this.props.chars[0]}/>
            <TextAndImg text={this.props.StyleLeft} image={this.props.StyleRight} name={this.props.chars[1]}/>
            <TextAndImg text={this.props.StyleRight} image={this.props.StyleLeft} name={this.props.chars[2]}/>
            <TextAndImg text={this.props.StyleLeft} image={this.props.StyleRight} name={this.props.chars[3]}/>
            <TextAndImg text={this.props.StyleRight} image={this.props.StyleLeft} name={this.props.chars[4]}/>
            <TextAndImg text={this.props.StyleLeft} image={this.props.StyleRight} name={this.props.chars[5]}/>
            <TextAndImg text={this.props.StyleRight} image={this.props.StyleLeft} name={this.props.chars[6]}/>
            <TextAndImg text={this.props.StyleLeft} image={this.props.StyleRight} name={this.props.chars[7]}/>
            <TextAndImg text={this.props.StyleRight} image={this.props.StyleLeft} name={this.props.chars[8]}/>
            <TextAndImg text={this.props.StyleLeft} image={this.props.StyleRight} name={this.props.chars[9]}/>
          </div>
      );
    }
}
  
  export default Characters;