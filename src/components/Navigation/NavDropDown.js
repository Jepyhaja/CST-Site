import React, {Component} from 'react';
import {
    NavLink
  } from 'react-router-dom';

class NavDropdown extends Component {
    render() {
      return (
        <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" to={this.props.loc} id="navbarDropdown" role="button" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            {this.props.name}
          </NavLink>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            {this.props.children}
          </div>
        </li>
      )
    }
  };

export default NavDropdown;