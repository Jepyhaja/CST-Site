import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
class FanMail extends Component {
  
  componentDidMount(){
    window.scrollTo(0,0);
  }
  handleSubmit = (event) =>{
    event.preventDefault();
    this.sendFormData();
  }
  sendFormData = () =>{
    // Prepare form data for submitting it.
    let form = document.querySelector('form');

    let name = ReactDOM.findDOMNode(this.refs.name).value;
    let title = ReactDOM.findDOMNode(this.refs.title).value;
    let reciever = ReactDOM.findDOMNode(this.refs.reciever).value;
    let email = ReactDOM.findDOMNode(this.refs.email).value;
    let message = ReactDOM.findDOMNode(this.refs.message).value;
    
    let formdata = new FormData();
    formdata.append('name',name);
    formdata.append('title',title);
    formdata.append('reciever',reciever);
    formdata.append('email',email);
    formdata.append('message',message);

    axios.post('/mail/contact_me.php',formdata)
    .then(function(response){
      form.reset();
      return response.data
    })
    .catch(function(error){
      form.reset();
      return error
    })
  }
    render() {
      
      
      return (
        <div className="bg-img-fanmail">
        <div className="container-fluid min-height pt-5">
          <div className="row">
            <div className="col"></div>
              <div className="col-xl-4 col-lg-6 col-md-8 col-sm-12">
              <form name="sentMessage" onSubmit={this.handleSubmit}>
                <div className="control-group">
                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                    <label><h3>Nimimerkki*</h3></label>
                    <input ref="name" className="form-control" id="name" type="text" placeholder="Nimimerkki" required="required" data-validation-required-message="Please enter your name."/>
                </div>
                </div>
                <div className="control-group">
                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                    <label><h3>Aihe*</h3></label>
                    <select ref="title" className="form-control" id="reciever" type="text" placeholder="Nimimerkki" required="required" data-validation-required-message="Please enter your name.">
                      <option value="Faniposti">Faniposti</option>
                      <option value="Tapahtumat">Tapahtumat</option>
                      <option value="Yhteydenottopyyntö">Yhteydenottopyyntö</option>
                    </select>
                </div>
                </div>
                <div className="control-group">
                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                    <label><h3>Saaja*</h3></label>
                    <select ref="reciever" className="form-control" id="reciever" type="text" placeholder="Nimimerkki" required="required" data-validation-required-message="Please enter your name.">
                      <option value="CST-tiimi">CST-tiimi</option>
                      <option className="jääprinsessa" value="Jääprinsessa">Jääprinsessa</option>
                      <option className="lady" value="Lady">Lady</option>
                      <option className="macho" value="Macho">Macho</option>
                      <option className="pikkuveli" value="Pikkuveli">Pikkuveli</option>
                      <option className="rumba" value="Rumba">Rumba</option>
                      <option className="tonnikala" value="Tonnikala">Tonnikala</option>
                    </select>
                </div>
                </div>
                <div className="control-group">
                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                    <label><h3>Sähköpostiosoite*</h3></label>
                    <input ref="email" className="form-control" id="email" type="email" placeholder="Sähköpostiosoite" data-validation-required-message="Please enter your email address." />
                </div>
                </div>
                <div className="control-group">
                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                    <label><h3>Viesti*</h3></label>
                    <textarea ref="message" className="form-control" id="message" rows="5" placeholder="Viesti" required="required" data-validation-required-message="Please enter a message."></textarea>
                </div>
                </div>
                <br/>
                <div>
                  <h6>*= pakollinen kenttä. Tietoja ei kerätä tai luovuteta kolmansille osapuolille.</h6>
                </div>
                <br/>
                <div className="form-group">
                  <button type="submit" className="btn btn-dark" id="sendMessageButton">Lähetä</button>
                </div>
              </form>
              </div>
            <div className="col"></div>
          </div>
        </div>
        </div>
      );
    }
  }
  
  export default FanMail;