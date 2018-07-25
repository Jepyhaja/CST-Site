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
    scrollToTop = () =>{
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop);
        if (top > 0) {
            window.scrollTo(0, top - 250)
            setTimeout(this.scrollToTop, 1)
        }
    }
    render() {
      return (
        <div>    
            <div id={this.props.name} className="row pt-2">
                <div className={"col-md-12 col-lg-6 "+ this.props.image}><img className="img-fluid" src={"/Images/Sotilaskortit/"+this.props.name+".png"} alt={this.props.name}/></div>
                <div className={"col-md-12 col-lg-6 pt-5 paragraph "+ this.props.text}><p>{this.state.p1}</p><p>{this.state.p2}</p></div>
            </div>
            <button className="btn btn-secondary" onClick={this.scrollToTop}>Takaisin ylös</button>
        </div>
      );
    }
}
  
  export default TextToRight;