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
        <h1>Contact Me</h1>
        <label className="label">Name:</label>
            <input type= "text" id="name-input" placeholder="First name.." required/>

        <label className="label">Email:</label>
            <input type="email"id="email-input"name="email"placeholder="Your email.." required/>

        <label className="label">Phone:</label><br></br>
            <input type="phone"id="phone-input"name="phone"placeholder="Your phone number.." required/>
            <br></br><br></br>
        <label className="label">Message:</label><br></br>
            <textarea className="phone" id="description-input" name="content" placeholder="Write something.." required>
            </textarea>

            <input type="submit" value="submit"/>
    </form>
                    </div>
                </div>
            </div>


        );
    }
}







