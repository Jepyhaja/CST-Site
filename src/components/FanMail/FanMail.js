import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class FanMail extends Component {
  state={
    type: 'info', message: ''
  }
  handleSubmit = (event) =>{
    event.preventDefault();
    this.setState({ type: 'info', message: 'Sending...' }, this.sendFormData);
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
      if(!response.data){
        this.setState({
          message: response.data
        })
      }
      form.reset();
    })
    .catch(function(error){
      console.log(error);
        this.setState({
          message: error
        })
      form.reset();
    })
  }
    render() {
      
      
      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col"></div>
              <div className="col-xl-4 col-lg-6 col-md-8 col-sm-12">
              <form name="sentMessage" onSubmit={this.handleSubmit}>
                <div className="control-group">
                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                    <label><h3>Name*</h3></label>
                    <input ref="name" className="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name."/>
                    <p className="help-block text-danger"></p>
                </div>
                </div>
                <div className="control-group">
                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                    <label><h3>Email Address*</h3></label>
                    <input ref="email" className="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." />
                    <p className="help-block text-danger"></p>
                </div>
                </div>
                <div className="control-group">
                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                    <label><h3>Message*</h3></label>
                    <textarea ref="message" className="form-control" id="message" rows="5" placeholder="Message" required="required" data-validation-required-message="Please enter a message."></textarea>
                    <p className="help-block text-danger"></p>
                </div>
                </div>
                <br/>
                <div id="success">{this.state.message}</div>
                <div className="form-group">
                  <button type="submit" className="btn btn-dark" id="sendMessageButton">Send</button>
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