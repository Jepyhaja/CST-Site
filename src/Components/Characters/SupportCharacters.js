import React, {Component} from 'react';
import Characters from './Characters';

class SupportCharacters extends Component {
    render() {
      const chars = [
        "Carina",
        "Cody",
        "Dead-President",
        "Everett",
        "Jen",
        "Jessie",
        "Lotta",  
        "Marlyn",
        "Mini"
      ];
      return (
          <Characters chars={chars} type="Tärkeät henkilöt" StyleLeft={"order-lg-2"} StyleRight={"order-lg-3"}/>
      );
    }
}
  
  export default SupportCharacters;