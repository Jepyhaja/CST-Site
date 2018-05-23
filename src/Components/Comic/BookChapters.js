import React, {Component} from 'react';
import {Link} from 'react-router-dom';
const Chapter = props => {
  if (!props.pages) {
    return null;
  }
  const path = '/comic/' + props.book + '/page/' + props.pages;
  const pageURI = window.location.pathname + window.location.search
  const liClassName = (props.path === pageURI)
    ? "list-inline-item col-2"
    : "list-inline-item col-2";
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
    return (
      <div className="conatainer-fluid">
        <div className="row">
          <div className="col"></div>
          <div className="col-lg-8">
            <h5>Kirjan kappaleet {this.props.chapters}</h5>
            <Chapter pages={this.props.pages[0]} book={this.props.book}></Chapter>
            <Chapter pages={this.props.pages[1]} book={this.props.book}></Chapter>
            <Chapter pages={this.props.pages[2]} book={this.props.book}></Chapter>
            <Chapter pages={this.props.pages[3]} book={this.props.book}></Chapter>
            <Chapter pages={this.props.pages[4]} book={this.props.book}></Chapter>
          </div>
          <div className="col"></div>
        </div>
      </div>
    );
  }
}

export default BookChapters;