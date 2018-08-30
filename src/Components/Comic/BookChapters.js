import React, {Component} from 'react';
import {Link} from 'react-router-dom';
const Chapter = props => {
  if (!props.pages) {
    return null;
  }
  const path = '/comic/' + props.book + '/page/' + props.pages;
  return (
    <div className="col-4 col-sm-4 col-md-3 col-lg-3 col-xl-2">
      <Link to={path} className="card">
        <img className="text-center img-fluid" src={'/Images/Comic/'+props.book+'/'+props.pages+'.png'} alt={props.names}/>
      </Link>
      <h6>{props.names}</h6>
    </div>
  );
}

class BookChapters extends Component {
  render() {
    return (
      <div className="row mt-3">
        <div className="col"></div>
          <div className="col-lg-12 col-xl-10">
            <div className="row">
              <div className="col"></div>
              <Chapter pages={this.props.pages[0]} book={this.props.book} names={this.props.names[0]}/>
              <Chapter pages={this.props.pages[1]} book={this.props.book} names={this.props.names[1]}/>
              <Chapter pages={this.props.pages[2]} book={this.props.book} names={this.props.names[2]}/>
              <Chapter pages={this.props.pages[3]} book={this.props.book} names={this.props.names[3]}/>
              <Chapter pages={this.props.pages[4]} book={this.props.book} names={this.props.names[4]}/>
              <div className="col"></div>
            </div>
          </div>
        <div className="col"></div>   
      </div> 
    );
  }
}

export default BookChapters;