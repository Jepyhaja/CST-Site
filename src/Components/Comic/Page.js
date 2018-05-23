import React, {Component} from 'react';
class Page extends Component {

    render() {
        const path = this.props.match.path.split('/');
        const source = '/Images/Comic/'+path[2]+'/'+path[4]+'.png'
        console.log(source);
        return (
            <div>
                <img className="img-fluid" src={source} alt={'page:'+ path[4]}/>
            </div>
        );
    }
}

export default Page;