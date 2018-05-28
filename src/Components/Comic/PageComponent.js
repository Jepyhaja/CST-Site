import React, {Component} from 'react';
class PageComponent extends Component {
    componentWillReceiveProps(){
        this.forceUpdate();
    }
    render() {
        var status = '';
        console.log(this.props.status,'status')
        if(this.props.status === false){
            status = 'card'
        }else{
            status = 'col-7'
        }
        //const path = this.props.match.path.split('/');
        //const source = '/Images/Comic/'+path[2]+'/'+path[4]+'.png'
        return (
            <div className={status}>
                <img className="img-fluid" src={this.props.source} alt={'page:'} onLoad={this.props.loaded}/>
            </div>
        );
    }
}

export default PageComponent;