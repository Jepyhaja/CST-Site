import React, {Component} from 'react';

class TextToRight extends Component {
    state = {
        p1: '',
        p2: '',
        p3: ''
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
                p2:splitted[1],
                p3:splitted[2]
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
        if(!this.props.name){
            return null;
        }
      return (
        <div>    
            <div id={this.props.name} className="row pt-5">
            <div className="col order-1"></div>
                <div className={"col-md-12 col-lg-6 "+ this.props.image}><img className="img-fluid charcard" src={"/Images/"+this.props.type+"/"+this.props.name+".png"} alt={this.props.name}/></div>
                <div className={"col-md-12 col-lg-5 col-xl-4 "+ this.props.text}><p className="chardesc paragraph">{this.state.p1}</p><p className="paragraph">{this.state.p2}</p><p className="paragraph">{this.state.p3}</p></div>
            <div className="col order-4"></div>
            </div>
            <button className="btn btn-secondary" onClick={this.scrollToTop}>Takaisin ylös</button>
        </div>
      );
    }
}
  
  export default TextToRight;