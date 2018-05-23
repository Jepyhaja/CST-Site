import React, {Component} from 'react';
import Page from './Page';
import {Link,Route} from 'react-router-dom';
const searchUrl = () => {
    const pageURI = window.location.pathname+window.location.search;
    const checker = pageURI.split("/");
    const page = checker[4];
    const book = checker[2];
    return {book, page};
}
const nextUrl = () => {
    return '/comic/'+searchUrl().book+'/page/'+ (parseInt(searchUrl().page)+1)
} 
const currentUrl = () => {
    return '/comic/'+searchUrl().book+'/page/'+ searchUrl().page
}
class ComicReader extends Component {
    state = {
        loading: true,
    }
    render() {
        return (
            <div>
                <Route path={currentUrl()} component={Page}/>
                <Link to={nextUrl()}>Seuraava</Link>
            </div>
        );
    }
}

export default ComicReader;