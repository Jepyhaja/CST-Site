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
    const url = searchUrl();
    const book = url.book;
    const page = (parseInt(url.page,0)+jump);
    return '/comic/'+book+'/page/'+page
}
const previousUrl = (jump) => {
    const url = searchUrl();
    const book = url.book;
    const page = (parseInt(url.page,0)-jump);
    if(url.page < 2){
        return currentUrl();
    }
    return '/comic/'+book+'/page/'+page
} 
const currentUrl = () => {
    const url = searchUrl();
    const page = parseInt(url.page,0);
    const book = url.book.toString();
    const path = '/comic/'+book+'/page/'+page;
    const source = '/Images/Comic/'+book+'/'+page+'.png';
    const preload1 = '/Images/Comic/'+book+'/'+(page+1)+'.png';
    const preload2 = '/Images/Comic/'+book+'/'+(page+2)+'.png';
    return {path,source,preload1,preload2}
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
        let doc = document.documentElement;
        let top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop);
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
        const url = searchUrl()
        if(url.page < 2){
            this.setState({
                rMid: '',
                rCor: '',
                lMid: 'none',
                lCor: 'none'
            });
            return null;
        }
        if(url.page > 74){
            this.setState({
                rMid: 'none',
                rCor: 'none',
                lMid: '',
                lCor: ''
            });
            return null;
        }
        if(url.page < 4){
            this.setState({
                rMid: '',
                rCor: '',
                lMid: '',
                lCor: 'none'
            });
            return null;
        }
        if(url.page > 72){
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
        const url = searchUrl();
        const page = url.page;
        const book = url.book;
        const current = currentUrl();

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
                                    <h4 className="pagenumber">{page}</h4>
                                </div>
                                <div className="col">
                                    <Link className={"btn btn-sm btn-secondary m-1 "+this.state.rMid} to={nextUrl(1)} onClick={this.openLoadingScreen}>&gt;</Link>
                                </div>
                                <div className="col">
                                    <Link className={"btn btn-sm btn-secondary m-1 "+this.state.rCor} to={nextUrl(3)} onClick={this.openLoadingScreen}>&gt;&gt;&gt;</Link>
                                </div>
                            </div>
                                <Route path={current.path} 
                                    render={
                                        (props) => <PageComponent 
                                        source={current.source} page={page} preload1={current.preload1} preload2={current.preload2} status={this.state.loading} loaded={this.closeLoadingScreen}{...props}/> 
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
                                    <h4 className="pagenumber">{page}</h4>
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