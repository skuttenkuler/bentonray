import React, { Component } from 'react';
import './Contact.css'
import $ from "jquery";

//import './emailForm.html'
export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.submitToAPI = this.submitToAPI.bind(this);
    }
        submitToAPI(event) {
            event.preventDefault();
            var URL = "https://9bcvv8x70l.execute-api.us-west-2.amazonaws.com/Production";

             var Namere = /[A-Za-z]{1}[A-Za-z]/;
             if (!Namere.test($("#name-input").val())) {
                          alert ("Please enter your name");
                 return;
             }
             var mobilere = /[0-9]{10}/;
             if (!mobilere.test($("#phone-input").val())) {
                 alert ("Please enter valid mobile number");
                 return;
             }
             if ($("#email-input").val()=="") {
                 alert ("Please enter your email");
                 return;
             }
        }



        render() {
        return (
            <div className="contact_body">
                <div className="contact_container">
                    <div className="contact_content">
                    <form id="contact-form"  onSubmit={this.submitToAPI} method="POST">
                        <h1>Contact Me</h1>
                        <div className="form-group">
                            <label className="label">Name:</label>
                                <input type= "text"  className="form-control" id="name-input" placeholder="First name.." required/>

                            <label className="label">Email:</label>
                                <input type="email" className="form-control" id="email-input"name="email"placeholder="Your email.." required/>

                            <label className="label">Phone:</label><br></br>
                                <input className="phone" type="phone" className="form-control" id="phone-input"name="phone"placeholder="Your phone number.." required/>
                                    <br></br>
                                <label className="label">Message:</label>
                                <textarea type="message" className="form-control"  id="description-input" name="content" placeholder="Write something.." required>
                                </textarea><br></br>
                                <input type="submit" onClick="submitToAPI(event)"value="submit"/>
                            </div>
                        </form>

                    </div>
                </div>
            </div>


        );
    }
}


