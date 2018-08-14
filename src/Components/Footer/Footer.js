import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component {
    render() {
      return (
        <div className="container-fluid page-footer">
            <div className="row pt-5 pb-4">
                <div className="col-2 d-none d-md-block order-md-2"></div>
                <div className="col-12 col-md-4 order-md-1">
                    <h4 className="pb-3 footer-header">Seuraa meitä</h4>
                </div>
                <div className="col col-md-4 order-md-4 pt-3 pb-5">
                    <a target="_blank" href="https://fi-fi.facebook.com/Charliessurfingteam/"><i className="fab fa-facebook-square"></i></a>
                    <a target="_blank" href="https://www.instagram.com/charliessurfingteam/"><i className="fab fa-instagram"></i></a>
                    <a target="_blank" href="https://twitter.com/CSTbarracuda"><i className="fab fa-twitter-square"></i></a>
                    <a target="_blank" href="https://charliessurfingteam.tumblr.com/"><i className="fab fa-tumblr-square"></i></a>
                    <a target="_blank" href="https://charliessurfingteam.blogspot.com/"><i className="fab fa-blogger"></i></a></div>
                <div className="col-12 col-md-6 order-md-3"><h5 className="footer-header pb-3">Pikalinkit</h5></div>
                <div className="col d-none d-md-block order-md-4"></div>
                <div className="col-3 col-md-2 order-md-5">
                    <p className=""><Link to="/">Etusivu</Link></p>
                    <p className=""><Link to="/comic">Sarjakuva</Link></p>
                    <p className=""><Link to="/fanmail">Faniposti</Link></p>
                </div>
                <div className="col-6 col-md-2 order-md-5">
                    <p><Link to="/chars/protagonists">Päähenkilöt</Link></p>
                    <p><Link to="/chars/supports">Tärkeät henkilöt</Link></p>
                    <p><Link to="/cst">CST</Link></p>
                </div>
                <div className="col-3 col-md-2 order-md-5">
                    <p><Link to="/world/globinet">Globinet</Link></p>
                    <p><Link to="/world/society">Yhteiskunta</Link></p>
                    <p><Link to="/media">Media</Link></p>
                </div>
            </div>
            <div className="row pt-3"><div className="col-12 col-md-11"><p className="disclaimer">Kaikki sivun kuvat ovat Charlie's Surfing Team ™ omaisuutta.(Lukuunottamatta Twitter ,Instagram ja Facebook logoja.)</p></div><div className=" col-12 col-md-1"><a href="https://jepyhaja.com/"><p className="disclaimer">Jere Pyhäjärvi 2018</p></a></div></div>
        </div>  
      );
    }
  }
  
  export default Footer;