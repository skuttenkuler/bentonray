import React, { Component } from 'react';
import './Contact.css'
import $ from "jquery";


export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state  = { name : "",
                        email: "",
                        phone: "",
                        description: "",

                        }
        this.submitToAPI = this.submitToAPI.bind(this);
    }
        submitToAPI(event) {
            event.preventDefault();
            const url = "";
            const { name, email, phone, description } = this.state;

             const nameRe = /[A-Za-z]{1}[A-Za-z]/;
             if (!nameRe.test(name)) {
                          alert ("Please enter your name");
                 return;
             }
             const mobileRe = /[0-9]{10}/;
             if (!mobileRe.test(phone)) {
                 alert ("Please enter valid mobile number");
                 return;
             }
             if (!email) {
                 alert ("Please enter your email");
                 return;
             }
            const data = {
                name : name,
                email : email,
                phone : phone,
                description : description
            };

            $.ajax({
                type: "POST",
                url : url,
                dataType : "json",
                crossDomain: "true",
                contentType: "application/json; charset=utf-8",
                data : JSON.stringify(data),

                success: function () {
                    alert('Thank you '+ this.state.name + '!');
                },
                error: function () {
                    alert("something went wrong...");
                }
            });

        }


        render() {
            const { name, email, phone, description } = this.state;
        return (
            <div className="contact_body">
                <div className="contact_container">
                    <div className="contact_content">
                    <form id="contact-form" method="POST">
                        <h1>Contact Me</h1>
                        <div className="form-group">
                            <label className="label">Name:</label>
                                <input type= "text"
                                        className="form-control"
                                        id="name-input"
                                        placeholder="Your name.."
                                        value={name}
                                        onChange={e => this.setState({ name: e.target.value})} required/>

                            <label className="label">Email:</label>
                                <input type="email"
                                        className="form-control"
                                        id="email-input"
                                        name="email"
                                        placeholder="Your email.."
                                        value={email}
                                        onChange={e => this.setState({ email: e.target.value})}
                                        required/>

                            <label className="label">Phone:</label><br></br>
                                <input className="phone"
                                        type="phone"
                                        id="phone-input"
                                        name="phone"
                                        placeholder="Your phone number.."
                                        value={phone}
                                        onChange={e => this.setState({ phone: e.target.value})}
                                        required/>
                                    <br></br>
                                <label className="label">Message:</label>
                                <textarea type="message"
                                        className="form-control"
                                        id="description-input"
                                        name="content"
                                        placeholder="Write something.."
                                        value={description}
                                        onChange={e => this.setState({ description: e.target.value})}
                                        required>
                                </textarea><br></br>
                                <input type="submit" onClick={this.submitToAPI} value="submit"/>
                            </div>
                        </form>

                    </div>
                </div>
            </div>


        );
    }
}


