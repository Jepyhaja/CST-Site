import React, {Component} from 'react';
class PageComponent extends Component {

    render() {
        var status = 'loader';
        console.log(this.props.status,'status')
        if(this.props.status === false){
            status = 'none'
        }else{
            status = 'loader'
        }
        return (
            
            <div className="text-center comicdiv">
                <div className={status}><img className="loadicon" src="/Images/Loader/Loader_img.png" alt="Load icon"/></div>
                <img className="img-fluid comicpage" src={this.props.source} alt={this.props.page} onLoad={this.props.loaded}/>
                <img className="d-none" src={this.props.preload1} alt={'preload1'} onLoad={this.props.loaded}/>
                <img className="d-none" src={this.props.preload2} alt={'preload2'} onLoad={this.props.loaded}/>
            </div>
        );
    }
}

export default PageComponent;