import React, {Component} from 'react';
import {Link} from 'react-router-dom';
const Chapter = props => {
  if (!props.pages) {
    return null;
  }
  const path = '/comic/' + props.book + '/page/' + props.pages;
  return (
    <li className="list-inline-item one-fourth">
      <Link to={path} className="card">
        <img className="text-center img-fluid" src={'/Images/Comic/'+props.book+'/'+props.pages+'.png'} alt=""/>
      </Link>
    </li>
  );
}

class BookChapters extends Component {
  render() {
    return (
      <div className="row mt-5">
        <div className="col"></div>
          <div className="col-xs-12 col-lg-8">
            <h5>Kirjan kappaleet {this.props.chapters}</h5>
            <ul className="list-inline">
              <Chapter pages={this.props.pages[0]} book={this.props.book}/>
              <Chapter pages={this.props.pages[1]} book={this.props.book}/>
              <Chapter pages={this.props.pages[2]} book={this.props.book}/>
              <Chapter pages={this.props.pages[3]} book={this.props.book}/>
              <Chapter pages={this.props.pages[4]} book={this.props.book}/>
            </ul>
          </div>
        <div className="col"></div>   
      </div> 
    );
  }
}

export default BookChapters;