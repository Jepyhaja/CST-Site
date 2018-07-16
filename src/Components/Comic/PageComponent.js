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
        //const path = this.props.match.path.split('/');
        //const source = '/Images/Comic/'+path[2]+'/'+path[4]+'.png'
        return (
            
            <div className="text-center comicdiv">
                <div className={status}><img className="loadicon" src="/Images/Loader/Loader_img.png" alt="Load icon"/></div>
                <img className="img-fluid comicpage" src={this.props.source} alt={'page:'} onLoad={this.props.loaded}/>
            </div>
        );
    }
}

export default PageComponent;