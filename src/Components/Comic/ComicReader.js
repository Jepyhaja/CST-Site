import React, {Component} from 'react';
import PageComponent from './PageComponent';
import {Link,Route} from 'react-router-dom';
const searchUrl = () => {
    const pageURI = window.location.hash+window.location.search;
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
    const path = '/comic/'+book+'/page/'+page;
    const source = '/Images/Comic/'+book+'/'+page+'.png';
    return {path,source}
}

class ComicReader extends Component {
    state = {
        loading: true,
        rMid: '',
        rCor: '',
        lMid: '',
        lCor: ''
    }
    scrollToTop = () =>{
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop);
        if (top > 0) {
            window.scrollTo(0, top - 50)
            setTimeout(this.scrollToTop, 2)
        }
    }

    openLoadingScreen = () =>{
        this.setState({
            loading: true
        });
        this.setButtonVisibility()
        
    }
    closeLoadingScreen = () =>{
        this.setState({
            loading: false
        });
        this.setButtonVisibility()
        this.scrollToTop()
    }

    setButtonVisibility = () => {
        if(searchUrl().page < 2){
            this.setState({
                rMid: '',
                rCor: '',
                lMid: 'none',
                lCor: 'none'
            });
            return null;
        }
        if(searchUrl().page > 74){
            this.setState({
                rMid: 'none',
                rCor: 'none',
                lMid: '',
                lCor: ''
            });
            return null;
        }
        if(searchUrl().page < 4){
            this.setState({
                rMid: '',
                rCor: '',
                lMid: '',
                lCor: 'none'
            });
            return null;
        }
        if(searchUrl().page > 72){
            this.setState({
                rMid: '',
                rCor: 'none',
                lMid: '',
                lCor: ''
            });
            return null;
        }else{
            this.setState({
                rMid: '',
                rCor: '',
                lMid: '',
                lCor: ''
            });
            return null;
        }
    }

    componentDidMount(){
        this.setButtonVisibility()
    }

    render() {
        const page = searchUrl().page;
        const book = searchUrl().book;

        if((book !== 'sak' && book !== 'somebok')||(page <= 0)||(page >= 76)){
            return (
                <div className="container-fluid">
                    <div className="row">
                        <div className="col"></div>
                        <div className="col-xs-12 col-sm-10 col-md-8 col-lg-6 mt-5">
                            <h2>Sivua ei löydy</h2>
                            <Link className="btn btn-secondary" to={'/comic/'}>Siirry sarjakuva valikkoon</Link>
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
                        <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 col-xl-8 mt-5">
                            <div className="row">
                                <div className="col">
                                    <Link className={"btn btn-sm btn-secondary m-1 "+this.state.lCor} to={previousUrl(3)} onClick={this.openLoadingScreen}>&lt;&lt;&lt;</Link>
                                </div>
                                <div className="col">
                                    <Link className={"btn btn-sm btn-secondary m-1 "+this.state.lMid} to={previousUrl(1)} onClick={this.openLoadingScreen}>&lt;</Link>
                                </div>
                                <div className="col">
                                    <p className="pagenumber">{page}</p>
                                </div>
                                <div className="col">
                                    <Link className={"btn btn-sm btn-secondary m-1 "+this.state.rMid} to={nextUrl(1)} onClick={this.openLoadingScreen}>&gt;</Link>
                                </div>
                                <div className="col">
                                    <Link className={"btn btn-sm btn-secondary m-1 "+this.state.rCor} to={nextUrl(3)} onClick={this.openLoadingScreen}>&gt;&gt;&gt;</Link>
                                </div>
                            </div>
                                <Route path={currentUrl().path} 
                                    render={
                                        (props) => <PageComponent 
                                        source={currentUrl().source} status={this.state.loading} loaded={this.closeLoadingScreen}{...props}/> 
                                        }
                                    />
                            <div className="row">
                                <div className="col">
                                    <Link className={"btn btn-sm btn-secondary m-1 "+this.state.lCor} to={previousUrl(3)} onClick={this.openLoadingScreen}>&lt;&lt;&lt;</Link>
                                </div>
                                <div className="col">
                                    <Link className={"btn btn-sm btn-secondary m-1 "+this.state.lMid} to={previousUrl(1)} onClick={this.openLoadingScreen}>&lt;</Link>
                                </div>
                                <div className="col">
                                    <p className="pagenumber">{page}</p>
                                </div>
                                <div className="col">
                                    <Link className={"btn btn-sm btn-secondary m-1 "+this.state.rMid} to={nextUrl(1)} onClick={this.openLoadingScreen}>&gt;</Link>
                                </div>
                                <div className="col">
                                    <Link className={"btn btn-sm btn-secondary m-1 "+this.state.rCor} to={nextUrl(3)} onClick={this.openLoadingScreen}>&gt;&gt;&gt;</Link>
                                </div>
                            </div>
                        </div>
                    <div className="col"></div>
                </div>
            </div>
            );
        }
    }
}

export default ComicReader;