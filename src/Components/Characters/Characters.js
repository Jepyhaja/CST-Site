import React, {Component} from 'react';
import Banner from '../Banner/Banner';
import TextAndImg from '../TextAndImage/TextAndImg';
import {
  Link
} from 'react-router-dom';

class Characters extends Component {
    render() {
      return (
          <div className="container-fluid">
            <Banner header="Päähenkilöt" name="hahmot"/>
            <TextAndImg text="order-lg-2" image="order-lg-1" name="Baby-Lynx"/>
            <TextAndImg text="order-lg-1" image="order-lg-2" name="Herhiläinen"/>
            <TextAndImg text="order-lg-2" image="order-lg-1" name="Kaunis Veera"/>
            <TextAndImg text="order-lg-1" image="order-lg-2" name="Prinssi"/>
            <TextAndImg text="order-lg-2" image="order-lg-1" name="Sose-tonttu"/>
            <TextAndImg text="order-lg-1" image="order-lg-2" name="Taalatasku"/>
            <TextAndImg text="order-lg-2" image="order-lg-1" name="Tuhkis"/>
            <TextAndImg text="order-lg-1" image="order-lg-2" name="Tyger"/>
            <TextAndImg text="order-lg-2" image="order-lg-1" name="Weasel"/>
            <TextAndImg text="order-lg-1" image="order-lg-2" name="WR"/>
          </div>
      );
    }
}
  
  export default Characters;