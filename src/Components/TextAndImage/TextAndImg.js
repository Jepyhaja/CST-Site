import React, {Component} from 'react';

const HeadAndParagraphs = props =>{
    const firstStyle = 'chardesc';
    const style = 'paragraph';
    let header, p1, p2, p3, p4;
    if(props.type === 'Tärkeät henkilöt' || props.type === 'Globinet'){
        header = <h2>{props.array.Name}</h2>
    }
    if(props.array.Text.p1){
        p1 = <p className={firstStyle+' '+style}>{props.array.Text.p1}</p>
    }
    if(props.array.Text.p2){
        p2 = <p className={style}>{props.array.Text.p2}</p>
    }
    if(props.array.Text.p3){
        p3 = <p className={style}>{props.array.Text.p3}</p>
    }
    if(props.array.Text.p4){
        p4 = <p className={style}>{props.array.Text.p4}</p>
    }
    return <div>{header} {p1} {p2} {p3} {p4}</div>
}

class TextAndImg extends Component {
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
            <div id={this.props.name} className="row pt-5 mb-5">
            <div className="col order-1"></div>
                <div className={"col-md-12 col-lg-6 "+ this.props.imageStyle}><img className="img-fluid charcard" src={"/Images/"+this.props.type+"/"+this.props.name+".png"} alt={this.props.name}/></div>
                <div className={"col-md-12 col-lg-5 col-xl-4 "+ this.props.textStyle}>
                    <HeadAndParagraphs array={this.props.array} type={this.props.type}/>
                </div>
            <div className="col order-4"></div>
            <div className="col-12 pt-5 order-5"><button className="btn btn-secondary" onClick={this.scrollToTop}>Takaisin ylös</button></div>
            </div>
        </div>
      );
    }
}
  
  export default TextAndImg;