import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom';

class DisplayCarousel extends Component {
    state = {
        char: '',
        current: 1
    }
    render() {
      

       function nextItem(){
            if(this.state.current < 9){
                this.state.current++
                loadItem(this.state.current);
                return null;   
            }else{
                this.state.current = 1;
                loadItem(this.state.current);
                return null;
            }
        }
        function prevItem(){
            if(this.state.current > 2){
                this.state.current++ 
                loadItem(this.state.current);
                return null;
            }else{
                this.state.current = 10;
                loadItem(this.state.current);
                return null;
            }
        }
        loadItem(this.state.current);
      return (
        <div>
            <div>
                <h2>{this.state.char}</h2>
                <p></p>
            </div>

            <button onClick={this.nextItem}>next</button>
            <button onClick={this.prevItem}>prev</button>
        </div>
      );
    }
}
  
  export default DisplayCarousel;