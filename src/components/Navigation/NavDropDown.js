import React, {Component} from 'react';
import {
    Link
  } from 'react-router-dom';

class NavDropdown extends Component {
    render() {
      return (
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            {this.props.name}
          </Link>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            {this.props.children}
          </div>
        </li>
      )
    }
  };

export default NavDropdown;