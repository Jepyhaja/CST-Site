import React, {Component} from 'react';

class TextToRight extends Component {
    state = {
        p1: '',
        p2: ''
    }
    componentWillMount=()=>{
        this.getTxt(this.props.name);
    }
    getTxt = async (name) => {
        const file = await fetch('/TextFiles/Chars/Main/'+name+'.txt')
        const text = await file.text();
        if(text[0] === '<'){
            return null;
        }else{
            const splitted = text.split('/')
            this.setState({
                p1:splitted[0],
                p2:splitted[1]
            })
        }
    }
    render() {
      return (
        <div className="row pt-2">
            <div className="col-lg-6"><img className="img-fluid" src={"/Images/Sotilaskortit/"+this.props.name+".png"} alt={this.props.name}/></div>
            <div className="col-lg-6 pt-5 paragraph"><p>{this.state.p1}</p><p>{this.state.p2}</p></div>
        </div>
      );
    }
}
  
  export default TextToRight;