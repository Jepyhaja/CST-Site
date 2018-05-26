import React, {Component} from 'react';
import BookChapters from './BookChapters';
import {
 Route,
 Link
} from 'react-router-dom';
import ComicReader from'./ComicReader';
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
      const pageURI = window.location.hash+window.location.search;
      const checker = pageURI.split("/");
      console.log(checker);
      if(checker[3] !== 'page'){
        return(
          <div className="conatainer-fluid">
            <div className="row">
              <div className="col"></div>
              <div className="col-lg-8">
                <h4 className="text-center">Sharp as knives</h4>
                <ul className="list-inline">
                  <Book name="Part I-IV" path="/comic/sakI" img="/Images/Comic/sak/1.png" alt="Book I"/>
                  <Book name="Part V-VIII" path="/comic/sakII" img="/Images/Comic/sak/22.png" alt="Book I"/>
                </ul>
              </div>
              <div className="col"></div>
            </div>
            <div className="row mt-5">
              <div className="col"></div>
              <div className="col-lg-8">
                <Route path="/comic/sakI"  
                  render={(props) => <BookChapters 
                    book="sak"
                    chapters="1-4" 
                    pages={['1','20','54','101']} 
                    {...props}/>
                  }
                />
                <Route path="/comic/sakII" 
                  render={(props) => <BookChapters 
                    book="sak"
                    chapters="5-8"
                    pages={['140','190','234','261']}
                    {...props}/>
                  }
                />
              </div>
              <div className="col"></div>
            </div>
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