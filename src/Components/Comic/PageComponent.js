import React, {Component} from 'react';
class PageComponent extends Component {

    render() {
        const path = this.props.match.path.split('/');
        const source = '/Images/Comic/'+path[2]+'/'+path[4]+'.png'
        console.log(source);
        return (
                    <img className="img-fluid" src={source} alt={'page:'+ path[4]}/>
        );
    }
}

export default PageComponent;