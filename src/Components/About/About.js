import React, {Component} from 'react';
import DisplayCreators from '../Displays/DisplayCreators';

const data = require('./AboutText.json');

console.log(data.Creators[0]);

class About extends Component {
  state = {
    a:'',
    b:'',
    c:'',
    d:'',
    e:'',
    f:'',
    g:'',
    h:'',
    j:'',
    k:'',
    l:'',
    m:'',
    n:''
  }
  
  componentDidMount(){
    window.scrollTo(0,0);
    this.setState({
      a:data.Creators[0].Nimi,
      b:data.Creators[0].Asu,
      c:data.Creators[0].Kukka,
      d:data.Creators[0].Ruoka,
      e:data.Creators[0].Leffa,
      f:data.Creators[0].Sarjis,
      g:data.Creators[0].Juhla,
      h:data.Creators[0].Päivä,
      j:data.Creators[0].Vuodenaika,
      k:data.Creators[0].Karkki,
      l:data.Creators[0].Peli,
      m:data.Creators[0].Numero,
      n:data.Creators[0].Inhoan,
    })
  }
    render() {
      const Images = props => {
        let Component = [];
        for(let i=0;i<props.data.length;i++){
            Component.push(<div key={i} className="col-2 col-xl-1"><img className="img-fluid clickable" src={"/Images/CST/"+props.data[i].Nimi+".png"} alt="" onClick={() => swapProps(props.data[i])}/></div>);
        }
        return Component;
    }
    const swapProps = props => {
      this.setState({
        a:props.Nimi,
        b:props.Asu,
        c:props.Kukka,
        d:props.Ruoka,
        e:props.Leffa,
        f:props.Sarjis,
        g:props.Juhla,
        h:props.Päivä,
        j:props.Vuodenaika,
        k:props.Karkki,
        l:props.Peli,
        m:props.Numero,
        n:props.Inhoan,
      })
  }
      return (
        <div className="container-fluid">
            <div className="row pt-5">
              <div className="col-12"><h1>Mikä Charlies's Surfing Team on?</h1></div>
            </div>
            <div className="row pt-5">
              <div className="col"></div>
              <div className="col-sm-10 col-lg-10 col-xl-5"><p className="paragraph">{data.CST.p1}</p><p className="paragraph">{data.CST.p2}</p></div>
              <div className="col"></div>
              <div className="col-sm-4 col-xl-4 pt-2"><img className="img-fluid" src="/Images/CST/emmett.png" alt="Emmett"/></div>
              <div className="col"></div></div>
            <div className="row pt-3">
              <div className="col"></div>
              <div className="col-xl-2 d-none d-xl-block"><img className="img-fluid" src="/Images/Tärkeät henkilöt/Everett.png" alt="Everett"/></div>
              <div className="col"></div>
              <div className="col-sm-10 col-lg-10 col-xl-5"><p className="paragraph pt-5">{data.CST.p3}</p><p className="paragraph pt-3">{data.CST.p4}</p></div>
              <div className="col"></div>
            </div>
            <div className="row pt-5">
              <div className="col-12"><h2>Tekijät</h2></div>
            </div>
            <div className="row pt-3">
              <div className="col"></div>
              <Images data={data.Creators}/>
              <div className="col"></div>
            </div>
              <DisplayCreators data={this.state}/>
        </div>  
      );
    }
  }
  
  export default About;