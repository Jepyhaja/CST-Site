import React, {Component} from 'react';
import Characters from './Characters';

class MainCharacters extends Component {
    render() {
      const chars = [
        "Baby-Lynx",
        "Herhilainen",
        "Veera",
        "Prinssi",
        "Sose-Tonttu",
        "Taalatasku",
        "Tuhkis",  
        "Tyger",
        "Weasel",
        "WR"
      ];
      return (
          <Characters chars={chars} type="Päähenkilöt" StyleLeft={"order-lg-2"} StyleRight={"order-lg-3"}/>
      );
    }
}
  
  export default MainCharacters;