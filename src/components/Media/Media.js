import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Media extends Component {
    componentDidMount(){
        window.scrollTo(0,0);
      }
    render() {
      return (
        <div className="bg-img-media">  
            <div className="container-fluid min-height">
                <div className="row pt-5">
                    <div className="col">
                        <h1>Medialle</h1>
                    </div>
                </div>
                <div className="row pt-5 pb-5">
                    <div className="col-12">
                        <p className="pb-2 pt-2">Yhteydenotot <Link className="direction" to="/mail">posti-sivulta</Link> löytyvän lomakkeen avulla.</p>
                    </div>
                    <div className="col"></div>
                    <div className="col-12 col-lg-6">
                        <h2 className="pb-4 pt-4">Lataa suoraan täältä</h2>
                        <a className="btn btn-secondary m-2" href="/Images/Ladattavat/CST_esittely.pdf" download="CST_esittely.pdf">CST esittely (pdf)</a>
                        <a className="btn btn-secondary m-2" href="/Images/Ladattavat/CST_toimintamalli.pdf" download="CST_toimintamalli.pdf">CST toimintamalli (pdf)</a>
                        <a className="btn btn-secondary m-2" href="/Images/Ladattavat/CST_referenssit.docx" download="CST_referenssit.docx">CST:n referenssit (docx)</a>
                        <a className="btn btn-secondary m-2" href="/Images/Ladattavat/CST_tiedote.pdf" download="CST_tiedote.pdf">CST tiedote (pdf)</a>
                        <a className="btn btn-secondary m-2" href="/Images/Ladattavat/CST_slogan_logo.png" download="CST_slogan_logo.png">CST slogan logo (png)</a>
                        <a className="btn btn-secondary m-2" href="/Images/Ladattavat/CST_TeamBarracuda_vektori.pdf" download="CST_TeamBarracuda_vektori.pdf">Team Barracuda logo (pdf)</a>
                        <a className="btn btn-secondary m-2" href="/Images/Ladattavat/CST_kanavat.png" download="CST_kanavat.png">kuva CST kanavista (png)</a>
                    </div>
                    <div className="col"></div>
                    <div className="col-12">
                        <h2 className="pb-4 pt-4">Lataa Google Drivestä</h2>
                        <p><a className="btn btn-secondary" href="https://drive.google.com/drive/folders/0B6G4qIKSUzDzSVZGVjljQ0EtOXc?usp=sharing" target="_blank" rel="noopener noreferrer">CST toimintaan liittyvät tiedostot</a></p>
                        <p><a className="btn btn-secondary" href="https://drive.google.com/drive/folders/0B6G4qIKSUzDzcl83a2NkYzlaRmc?usp=sharing" target="_blank" rel="noopener noreferrer">CST kuvia mediakäyttöön</a></p>
                    </div>
                    <div className="col"></div>
                </div>
            </div>  
        </div>
      );
    }
  }
  
  export default Media;