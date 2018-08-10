import React, {Component} from 'react';

const Text = () => {
    return 'moi'
}

class DisplayFamilies extends Component {
    render() {
      return (
        <div className="row">
            <div className="col d-none d-md-block"><img src="" alt=""/></div>
            <div className="col"><Text/></div>
        </div>
      );
    }
}
  
  export default DisplayFamilies;