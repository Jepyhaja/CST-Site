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
    <div className="col-4 col-sm-4 col-md-3 col-lg-3 col-xl-2">
        <Link to={path} className="card">
          <img className="img-fluid" src={props.img} alt={props.alt}/>
        </Link>
        <h5 className="text-center">{props.name}</h5>
    </div>
  );
}

class Comic extends Component {
    render() {
      const pageURI = window.location.hash+window.location.search;
      const checker = pageURI.split("/");
      if(checker[3] !== 'page'){
        return(
          <div className="container-fluid pt-2">
            <div className="row">
              <div className="col"></div>
              <div className="col-lg-12 col-xl-10">
                <h1 className="text-center pb-2">Sharp as knives</h1>
                  <div className="row">
                  <div className="col"></div>
                  <Book name="I-II" path="/comic/sakI" img="/Images/Comic/sak/1.png" alt="Book I"/>
                  <div className="col"></div>
                  </div>
              </div>
              <div className="col"></div>
            </div>
                <Route path="/comic/sakI"  
                  render={(props) => <BookChapters 
                    book="sak"
                    pages={['1','22']}
                    names={['Sharp as knives','Bound to take your life']} 
                    {...props}/>
                  }
                />
                <Route path="/comic/sakII" 
                  render={(props) => <BookChapters 
                    book="sak"
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