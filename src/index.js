import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {
    HashRouter as Router,
    withRouter
  } from 'react-router-dom';
  

  class ScrollToTop extends Component {
    componentDidUpdate(prevProps) {
      if (this.props.location !== prevProps.location) {
        window.scrollTo(0, 0)
      }
    }
  
    render() {
      return this.props.children
    }
  }
  
  export default withRouter(ScrollToTop)
  

ReactDOM.render((
    <Router>
        <ScrollToTop>
            <App />
        </ScrollToTop>    
    </Router>), 
    document.getElementById('root'));
    registerServiceWorker();
