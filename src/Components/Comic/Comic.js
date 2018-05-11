import React, {Component} from 'react';
import BookChapters from './BookChapters';
import {
 Route,
 Link
} from 'react-router-dom';
const Book = props => {
  const pageURI = window.location.pathname+window.location.search
  const liClassName = (props.path === pageURI) ? "list-inline-item col-2" : "list-inline-item col-2";
  const path = props.disabled ? pageURI : props.path
  return (
    <li className={liClassName}>
      <Link to={path} className="card">
        <img className="img-fluid" src={props.img} alt={props.alt}/>
        <p className="text-center">{props.name}</p>
      </Link>
    </li>
  );
}
class Comic extends Component {
    render() {
        return(
          <div className="conatainer-fluid">
            <div className="row">
              <div className="col"></div>
              <div className="col-lg-8">
                <h4 className="text-center">Sharp as knives</h4>
                <ul className="list-inline">
                  <Book name="Part I-IV" path="/comic/SaK-bookI" img="/Images/Comic/Book_1/1.1/1.png" alt="Book I"/>
                  <Book name="Part V-VIII" path="/comic/SaK-bookII" img="/Images/Comic/Book_1/1.1/1.png" alt="Book I"/>
                </ul>
              </div>
              <div className="col"></div>
            </div>
            <div className="row mt-5">
              <div className="col"></div>
              <div className="col-lg-8">
              <h5>mappaa eri kirjat tähän JSON filusta</h5>
                <Route path="/comic/SaK-bookI" component={BookChapters}/>
                <Route path="/comic/SaK-bookII" component={BookChapters}/>
              </div>
              <div className="col"></div>
            </div>
        </div>  
      );
    }
  }
  
  export default Comic;