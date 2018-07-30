import React, {Component} from 'react';

class About extends Component {
  componentDidMount(){
    window.scrollTo(0,0);
  }
    render() {
      return (
        <div className="conatainer-fluid">
            <h3>About Page</h3>
        </div>  
      );
    }
  }
  
  export default About;