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
    let email = ReactDOM.findDOMNode(this.refs.email).value;
    let message = ReactDOM.findDOMNode(this.refs.message).value;
    
    let formdata = new FormData();
    formdata.append('name',name);
    formdata.append('email',email);
    formdata.append('message',message);

    axios.post('/mail/contact_me.php',formdata)
    .then(function(response){
      console.log(response.data);
      form.reset();
      return response.data
    })
    .catch(function(error){
      console.log(error);
      form.reset();
      return error
    })
  }
    render() {
      
      
      return (
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
                    <label><h3>Sähköpostiosoite</h3></label>
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
                  <h6>* pakollinen kenttä</h6>
                  <h6>Jos haluat vastauksen esimerkiksi kysymykseesi, kirjoita sähköpostiosoiteesi.</h6>
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
      );
    }
  }
  
  export default FanMail;