import React, {Component} from 'react';
import DisplayCreators from '../Displays/DisplayCreators';

const data = require('./AboutText.json');

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
            Component.push(<div key={i} className="col col-xl-1"><img className="img-fluid clickable" src={"/Images/CST/"+props.data[i].Nimi+".png"} alt="" onClick={() => swapProps(props.data[i])}/></div>);
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
        <div>
          <div className="bg-img-cst">
            <div className="container-fluid">
                <div className="row pt-5">
                  <div className="col-12"><h1>Mikä Charlies's Surfing Team on?</h1></div>
                </div>
                <div className="row pt-5">
                  <div className="col col-md-1"></div>
                  <div className="col-12 col-md-8"><p className="paragraph text-left">{data.CST.p1}</p></div>
                  <div className="col col-md-3"></div>
                  <div className="col col-md-1"></div>
                  <div className="col-12 col-md-8">
                    <p className="paragraph text-left">{data.CST.p3}</p>
                  </div>
                  <div className="col col-md-3"></div>
                  <div className="col col-md-1"></div>
                  <div className="col-12 col-md-8">
                    <p className="paragraph text-left">{data.CST.p2}</p>
                  </div>
                  <div className="col col-md-3"></div>
                  <div className="col col-md-1"></div>
                  <div className="col-12 col-md-8"><p className="paragraph text-left">{data.CST.p4}</p></div>
                  <div className="col col-md-3"></div>
                </div>
              </div>
          </div>
          <div className="container-fluid bg-color-darkergray pt-5 pb-5">
            <div className="row">
                <div className="col-12 pb-2"><h2>Tekijät</h2></div>
            </div>
            <div className="row pt-3">
              <div className="col d-none d-lg-block"></div>
              <Images data={data.Creators}/>
              <div className="col d-none d-lg-block"></div>
            </div>
              <DisplayCreators data={this.state}/>
          </div>
      </div>
      );
    }
  }
  
  export default About;