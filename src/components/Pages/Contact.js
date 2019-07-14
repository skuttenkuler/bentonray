import React, { Component } from 'react';
import './Contact.css'
import $ from "jquery";

//import './emailForm.html'
export default class Contact extends Component {
        componentDidMount() {
        function submitToAPI(e) {
            e.preventDefault();
            var URL = "https://btc3jl16yg.execute-api.us-west-2.amazonaws.com/Initial";

             var Namere = /[A-Za-z]{1}[A-Za-z]/;
             if (!Namere.test($("#name-input").val())) {
                          alert ("Name can not less than 2 char");
                 return;
             }
             var mobilere = /[0-9]{10}/;
             if (!mobilere.test($("#phone-input").val())) {
                 alert ("Please enter valid mobile number");
                 return;
             }
             if ($("#email-input").val()=="") {
                 alert ("Please enter your email id");
                 return;
             }
            }
        }

        render() {
        return (
            <div className="contact_body">
                <div className="contact_container">
                    <div className="contact_content">
                    <html>
                    <form id="contact-form" method="post">
                        <h1>Contact Me</h1>
                        <div className="form-group">
                            <label className="label">Name:</label>
                                <input type= "text" id="name-input" placeholder="First name.." class="form-control" required/>

                            <label className="label">Email:</label>
                                <input type="email"id="email-input"name="email"placeholder="Your email.." class="form-control" required/>

                            <label className="label">Phone:</label><br></br>
                                <input className="phone" type="phone"id="phone-input"name="phone"placeholder="Your phone number.." class="form-control" required/>
                                    <br></br><br></br>
                                <label className="label">Message:</label><br></br>
                                <textarea type="message" id="description-input" name="content" placeholder="Write something.." class="form-control" required>
                                </textarea>
                                <input type="submit" onClick="submitToAPI(event)" value="submit"/>
                            </div>
                        </form>
                    </html>

                    </div>
                </div>
            </div>


        );
    }
}


