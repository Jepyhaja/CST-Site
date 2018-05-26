import React, {Component} from 'react';
import PageComponent from './PageComponent';
import {Link,Route} from 'react-router-dom';
const searchUrl = () => {
    const pageURI = window.location.pathname+window.location.search;
    const checker = pageURI.split("/");
    const page = checker[4];
    const book = checker[2];
    return {book, page};
}
const nextUrl = (jump) => {
    return '/comic/'+searchUrl().book+'/page/'+ (parseInt(searchUrl().page,0)+jump)
}
const previousUrl = (jump) => {
    if(searchUrl().page < 2){
        return currentUrl();
    }
    return '/comic/'+searchUrl().book+'/page/'+ (parseInt(searchUrl().page,0)-jump);
} 
const currentUrl = () => {
    const page = parseInt(searchUrl().page,0);
    const book = searchUrl().book.toString();
    const src = '/comic/'+book+'/page/'+page;
    const component = PageComponent;
    return {src,component}
    
}
class ComicReader extends Component {
    state = {
        loading: true,
    }
    render() {
        const page = searchUrl().page;
        const book = searchUrl().book;
        if((book !== 'sak' && book !== 'somebok')||(page <= 0)||(page >= 76)){
            return (
                <div className="container-fluid">
                    <div className="row">
                        <div className="col"></div>
                        <div className="col-4">
                            <h2>Sivua ei löydy</h2>
                            <Link to={'/comic/sak/page/1'}>Siirry sarjakuvan sivulle 1</Link>
                        </div>
                        <div className="col"></div>
                    </div>
                </div>
            );
        }
        if(page < 2){
            return (
                <div className="container-fluid">
                    <div className="row">
                        <div className="col"></div>
                        <div className="col-4">
                            <Route path={currentUrl().src} component={currentUrl().component}/>
                            <Link to={nextUrl(1)}>Seuraava</Link>
                        </div>
                        <div className="col"></div>
                    </div>
                </div>
            );
        }
        if(page > 74){
            return (
                <div className="container-fluid">
                    <div className="row">
                        <div className="col"></div>
                        <div className="col-4">
                            <Route path={currentUrl().src} component={currentUrl().component}/>
                            <Link to={previousUrl(1)}>Edellinen</Link>
                        </div>
                        <div className="col"></div>
                    </div>
                </div>
            );
        }else{
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col"></div>
                    <div className="col-4">
                        <Route path={currentUrl().src} component={currentUrl().component}/>
                        <Link to={previousUrl(1)}>Edellinen</Link>
                        <Link to={nextUrl(1)}>Seuraava</Link>
                    </div>
                <div className="col"></div>
            </div>
        </div>
        );
        }
    }
}

export default ComicReader;