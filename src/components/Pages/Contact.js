import React, { Component } from 'react';
import './Contact.css'

//import './emailForm.html'
export default class Contact extends Component {
        render() {
        return (
            <div className="contact_body">
                <div className="contact_container">
                    <div className="contact_content">
                    <form id="contactForm" method="post">
        <label className="label">Name:</label>
            <input type= "text" id="name-input" placeholder="First name.." required/>

        <label className="label">Email:</label>
            <input type="email"id="email-input"name="email"placeholder="Your email.." required/>

        <label className="label">Phone:</label>
            <input type="phone"id="phone-input"name="phone"placeholder="Your phone number.." required/>

        <label className="label">Message</label>
            <textarea id="description-input" name="content" placeholder="Write something.." required>
            </textarea>
            <div class="g-recaptcha" data-sitekey="6Lc7cVMUAAAAAM1yxf64wrmO8gvi8A1oQ_ead1ys" class="form-control"></div>
            <div id="toast"></div>
            <button className="contact_button" onClick="submitToAPI(event)" type="submit" id="submit"><label className="label">Send</label></button>
    </form>
                    </div>
                </div>
            </div>


        );
    }
}







