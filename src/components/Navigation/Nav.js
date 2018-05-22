import React, {Component} from 'react';
import {
    Link,
    NavLink
  } from 'react-router-dom';
import NavDropdown from './NavDropDown';

  const NavItem = props => {
    const pageURI = window.location.pathname+window.location.search
    const liClassName = (props.path === pageURI) ? "nav-item active" : "nav-item";
    const path = props.disabled ? pageURI : props.path
    const aClassName = props.disabled ? "nav-link disabled" : "nav-link";
    return (
      <li className={liClassName}>
        <Link to={path} className={aClassName}>
          {props.name}
          {(props.path === pageURI) ? (<span className="sr-only">(current)</span>) : ''}
        </Link>
      </li>
    );
  }

class Nav extends Component {
    render() {
      return (
            <div className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <button className="navbar-toggler" 
                    type="button" data-toggle="collapse" 
                    data-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                    </span>
                </button>
            
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <NavLink exact to="/" className="nav-link" >Etusivu</NavLink>
                        <NavLink to="/comic" className="nav-link" >Sarjakuva</NavLink>
                        <NavDropdown name="Maailma">
                            <Link className="dropdown-item" to="/globinet">Globinet</Link>
                            <Link className="dropdown-item" to="/society">Yhteiskunta</Link>
                            <Link className="dropdown-item" to="/locations">Keskeiset paikat</Link>
                        </NavDropdown>
                        <NavDropdown name="Hahmot">
                            <Link className="dropdown-item" to="/protagonists">Päähenkilöt</Link>
                            <Link className="dropdown-item" to="/personsofinterest">Keskeiset hahmot</Link>
                        </NavDropdown>
                        <NavItem name="Faniposti" path="/fanmail"/>
                        <NavDropdown name="CST">
                            <Link className="dropdown-item" to="/about">Mikä on CST?</Link>
                            <Link className="dropdown-item" to="/personsofinterest">Keitä olemme?</Link>
                        </NavDropdown>
                        <NavItem name="Medialle" path="/media" disabled="true" />
                    </ul>
                </div>
            </div>
      );
    }
  }
  
  export default Nav;