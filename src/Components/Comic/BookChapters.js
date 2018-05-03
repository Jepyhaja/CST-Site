import React, {Component} from 'react';
import {
 Link
} from 'react-router-dom';

class BookChapters extends Component {
    render() {
        return(
            <div className="conatainer-fluid">
                <div className="row">
                    <div className="col"></div>
                    <div className="col-lg-8">
                    <h5>mappaa tähän kirjan kappaleet</h5>
                    <Link to="/comic/page/1">siirry sivulle x</Link>
                    </div>
                    <div className="col"></div>
                </div>
            </div>  
      );
    }
  }
  
  export default BookChapters;