import React, {Component} from 'react';
import BookChapters from './BookChapters';
import {
 Route,
 Link
} from 'react-router-dom';
import ComicReader from'./ComicReader';
import './comic.css'
const Book = props => {
  const pageURI = window.location.pathname+window.location.search
  const path = props.disabled ? pageURI : props.path
  return (
    <li className="list-inline-item one-third">
      <Link to={path} className="card">
        <img className="img-fluid" src={props.img} alt={props.alt}/>
      </Link>
      <h4 className="text-center">{props.name}</h4>
    </li>
  );
}

class Comic extends Component {
    render() {
      const pageURI = window.location.hash+window.location.search;
      const checker = pageURI.split("/");
      if(checker[3] !== 'page'){
        return(
          <div className="container-fluid pt-3">
            <div className="row">
              <div className="col"></div>
              <div className="col-xs-12 col-lg-8">
                <h1 className="text-center pb-2">Sharp as knives</h1>
                <ul className="list-inline pt-3">
                  <Book name="I-II" path="/comic/sakI" img="/Images/Comic/sak/1.png" alt="Book I"/>
                </ul>
              </div>
              <div className="col"></div>
            </div>
                <Route path="/comic/sakI"  
                  render={(props) => <BookChapters 
                    book="sak"
                    chapters="I-II" 
                    pages={['1','22']} 
                    {...props}/>
                  }
                />
                <Route path="/comic/sakII" 
                  render={(props) => <BookChapters 
                    book="sak"
                    chapters="V-VIII"
                    pages={['140','190','234','261']}
                    {...props}/>
                  }
                />
            </div>
        );
      }
      if(checker[3] === "page"){
        return(
          <ComicReader/>
        );
      }
    }
  }
  
  export default Comic;