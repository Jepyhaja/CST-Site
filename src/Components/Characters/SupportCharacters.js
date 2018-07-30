import React, {Component} from 'react';
import Characters from './Characters';

class SupportCharacters extends Component {
    render() {
      const chars = [
        "Carina Håst-Fagel",
        "Cody Håst-Fagel",
        "Dead President",
        "Everett Horsefall",
        "Jen",
        "Jessie",
        "Lotta BigJack",  
        "Marlyn Rawpike",
        "Mini"
      ];
      return (
          <Characters chars={chars} type="Tärkeät henkilöt" StyleLeft={"order-lg-2"} StyleRight={"order-lg-3"}/>
      );
    }
}
  
  export default SupportCharacters;