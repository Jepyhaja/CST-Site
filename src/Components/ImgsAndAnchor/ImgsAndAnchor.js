import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom';

class ImgsAndAnchor extends Component {
  componentDidMount() {
    // Decode entities in the URL
    // Sometimes a URL like #/foo#bar will be encoded as #/foo%23bar
    window.location.hash = window.decodeURIComponent(window.location.hash);
    const scrollToAnchor = () => {
      const hashParts = window.location.hash.split('#');
      if (hashParts.length > 2) {
        const hash = hashParts.slice(-1)[0];
        document.querySelector(`#${hash}`).scrollIntoView();
      }
    };
    scrollToAnchor();
    window.onhashchange = scrollToAnchor;
  }
  
    render() {
      return (
          <Link to={'/chars/protagonists#'+this.props.name}>
            <img className="img-fluid" src={"/Images/Hahmot/"+this.props.name+".png"} alt={this.props.name}/>
            <br/>
            <img className="img-fluid" src={"/Images/Nimikirjoitukset/"+this.props.name+".png"} alt={"Nimikijoitus "+this.props.name}/>
          </Link>
      );
    }
}
  
  export default ImgsAndAnchor;