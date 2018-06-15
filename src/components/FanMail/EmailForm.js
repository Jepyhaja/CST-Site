import React, {Component} from 'react';
class EmailForm extends Component {
    render() {
      return (
        <form name="sentMessage" id="contactForm" noValidate="novalidate">
            <div className="control-group">
            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                <label><h3>Name*</h3></label>
                <input className="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name."/>
                <p className="help-block text-danger"></p>
            </div>
            </div>
            <div className="control-group">
            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                <label><h3>Email Address*</h3></label>
                <input className="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address."/>
                <p className="help-block text-danger"></p>
            </div>
            </div>
            <div className="control-group">
            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                <label><h3>Phone Number*</h3></label>
                <input className="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number."/>
                <p className="help-block text-danger"></p>
            </div>
            </div>
            <div className="control-group">
            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                <label><h3>Message*</h3></label>
                <textarea className="form-control" id="message" rows="5" placeholder="Message" required="required" data-validation-required-message="Please enter a message."></textarea>
                <p className="help-block text-danger"></p>
            </div>
            </div>
            <br/>
            <div id="success"></div>
            <div className="form-group">
            <button type="submit" className="btn btn-dark" id="sendMessageButton">Send</button>
            </div>
      </form>
      );
    }
  }
  
  export default EmailForm;