import React, {Component} from 'react';
import {
    Link,
    NavLink
  } from 'react-router-dom';
import NavDropdown from './NavDropDown';

  const NavItem = props => {
    const pageURI = window.location.hash+window.location.search
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
    state = {
      dTogl: '',
      trgt: ''
    }
    updateDimensions = () => {
      if(window.innerWidth < 992){
        this.setState({
          dTogl : "collapse",
          trgt: 'navbarSupportedContent'
        });
      }else{
        this.setState({
          dTogl : "",
          trgt: ''
        });
      };
    }

    componentDidMount() {
      this.updateDimensions();
      window.addEventListener("resize", this.updateDimensions.bind(this));
    }
    componentWillUnMount() {
      window.removeEventListener("resize", this.updateDimensions.bind(this));
    }
    render() {
      return (
            <div className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/"><img className="img-fluid" id="navbar-logo" src="/Images/Home/cst-logo.png" alt="CST-logo"/></Link>
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
                    <ul className="navbar-nav ml-auto" data-toggle={this.state.dTogl} data-target={"#"+this.state.trgt} aria-controls={this.state.trgt}>
                        <NavLink exact to="/" className="nav-link">Etusivu</NavLink>
                        <NavLink to="/comic" className="nav-link">Sarjakuva</NavLink>
                        <NavDropdown name="Maailma" loc="/world">
                            <Link className="dropdown-item" to="/world/globinet">Globinet</Link>
                            <Link className="dropdown-item" to="/world/society">Yhteiskunta</Link>
                        </NavDropdown>
                        <NavDropdown name="Hahmot" loc="/chars">
                            <Link className="dropdown-item" to="/chars/protagonists">Päähenkilöt</Link>
                            <Link className="dropdown-item" to="/chars/supports">Muut hahmot</Link>
                        </NavDropdown>
                        <NavLink to="/mail" className="nav-link">Posti</NavLink>
                        <NavLink to="/cst" className="nav-link">CST</NavLink>
                        <NavItem name="Medialle" path="/media" />
                    </ul>
                </div>
            </div>
      );
    }
  }
  
  export default Nav;