import React, {Component} from 'react';
import BookChapters from './BookChapters';
import {
 Route,
 Link
} from 'react-router-dom';

class Comic extends Component {
    render() {
        return(
          <div className="conatainer-fluid">
            <div className="row">
              <div className="col"></div>
              <div className="col-lg-8">
              <h4>Kirjavalikko</h4>
              <Link to="/comic/book">kirja</Link>
              </div>
              <div className="col"></div>
            </div>
            <div className="row mt-5">
              <div className="col"></div>
              <div className="col-lg-8">
                <Route path="/comic/book" component={BookChapters}/>
              </div>
              <div className="col"></div>
            </div>
        </div>  
      );
    }
  }
  
  export default Comic;