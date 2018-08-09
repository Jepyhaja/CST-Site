import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom';

const ContinentLinks = props =>{
  let components = [];
  for(let i=0;i<props.Data.length;i++){
    components.push(<Link key={i} className={props.Data[i].id+" anchor"} to={'/world/globinet#'+props.Data[i].id}><h2 className={props.Data[i].id+"Name continent"}>{props.Data[i].id}</h2></Link>)
  }
  return components
}

class GlobinetBanner extends Component {
  componentDidMount() {
    // Decode entities in the URL
    // Sometimes a URL like #/foo#bar will be encoded as #/foo%23bar
    window.location.hash = window.decodeURIComponent(window.location.hash);
    const scrollToAnchor = () => {
      const hashParts = window.location.hash.split('#');
      if (hashParts.length > 2) {
        const hash = hashParts.slice(-1)[0];
        document.querySelector(`#${hash}`).scrollIntoView({behavior: 'smooth'});
      }
    };
    scrollToAnchor();
    window.onhashchange = scrollToAnchor;
  }
    render() {
        const data = this.props.data
      return (
        <div id="banner">
          <div className="row pt-2"><div className="col-12"><h1 className="head1">Globinet</h1></div></div>
          <div className="row pb-5">
            <div className="col"></div>
            <div className="col-12 col-lg-8">
            <img className="img-fluid banner" src="/Images/Banner/Globinet.png" alt="Globinet kartta"/>
            <ContinentLinks Data={data}/>
            </div>
            <div className="col"></div>
            <div className="col-12"><p className="hint">Paina maanosaa.</p></div>
          </div>
        </div>  
      );
    }
}
  
  export default GlobinetBanner;