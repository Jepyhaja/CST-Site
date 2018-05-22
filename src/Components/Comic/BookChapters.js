import React, {Component} from 'react';
import {
 Link
} from 'react-router-dom';
const Chapter = props => {
    if(!props.pages){
        return null;
    }
    const path = '/comic/page/'+props.pages;
    const pageURI = window.location.pathname+window.location.search
    const liClassName = (props.path === pageURI) ? "list-inline-item col-2" : "list-inline-item col-2";
    return (
      <li className={liClassName}>
        <Link to={path} className="card">
          <p className="text-center">{props.name}</p>
        </Link>
      </li>
    );
  }

class BookChapters extends Component {
    render() {
        return(
            <div className="conatainer-fluid">
                <div className="row">
                    <div className="col"></div>
                    <div className="col-lg-8">
                    <h5>Kirjan kappaleet {this.props.myProp}</h5>
                    <Chapter pages={this.props.pages[0]}></Chapter>
                    <Chapter pages={this.props.pages[1]}></Chapter>
                    <Chapter pages={this.props.pages[2]}></Chapter>
                    <Chapter pages={this.props.pages[3]}></Chapter>
                    <Chapter pages={this.props.pages[4]}></Chapter>
                    </div>
                    <div className="col"></div>
                </div>
            </div>  
      );
    }
  }
  
  export default BookChapters;