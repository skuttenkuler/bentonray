import React, { Component } from 'react';
import './Contact.css'
import $ from "jquery";


export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state  = { name : '',
                        email: '',
                        phone: '',
                        description: '',

                        }
        this.submitToAPI = this.submitToAPI.bind(this);
    }
        submitToAPI(event) {
            event.preventDefault();
            var URL = "";

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
            var name = $("#name").val();
            var email = $("#email").val();
            var phone = $("#phone").val();
            var description = $("#description").val();
            var data = {
                name : name,
                email : email,
                phone : phone,
                desc : description
            };

            $.ajax({
                type: "POST",
                url : "",
                dataType : "json",
                crossDomain: "true",
                contentType: "application/json; charset=utf-8",
                data : JSON.stringify(data),

                success: function () {
                    alert('Thank you '+ this.state.name + '!');
                    document.getElementById("contact-form").requestFullscreen();
                Contact.reload();
                },
                error: function () {
                    alert("something went wrong...");
                }
            });

        }


        render() {
        return (
            <div className="contact_body">
                <div className="contact_container">
                    <div className="contact_content">
                    <form id="contact-form"  onSubmit={this.state.submitToAPI} method="POST">
                        <h1>Contact Me</h1>
                        <div className="form-group">
                            <label className="label">Name:</label>
                                <input type= "text"
                                        className="form-control"
                                        id="name-input"
                                        placeholder="First name.."
                                        value={this.state.name}
                                        onChange={e => this.setState({ name: e.target.value})} required/>

                            <label className="label">Email:</label>
                                <input type="email"
                                        className="form-control"
                                        id="email-input"
                                        name="email"
                                        placeholder="Your email.."
                                        value={this.state.email}
                                        onChange={e => this.setState({ email: e.target.value})}
                                        required/>

                            <label className="label">Phone:</label><br></br>
                                <input className="phone"
                                        type="phone"
                                        id="phone-input"
                                        name="phone"
                                        placeholder="Your phone number.."
                                        value={this.state.phone}
                                        onChange={e => this.setState({ phone: e.target.value})}
                                        required/>
                                    <br></br>
                                <label className="label">Message:</label>
                                <textarea type="message"
                                        className="form-control"
                                        id="description-input"
                                        name="content"
                                        placeholder="Write something.."
                                        value={this.state.description}
                                        onChange={e => this.setState({ description: e.target.value})}
                                        required>
                                </textarea><br></br>
                                <input type="submit" onClick={e => this.submitToAPI(e)} value="submit"/>
                            </div>
                        </form>

                    </div>
                </div>
            </div>


        );
    }
}


