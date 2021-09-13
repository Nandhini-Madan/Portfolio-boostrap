import React from "react";
import {useHistory} from "react-router";

import "./ContactMe.css";
const ContactMe = () => {
    let history=useHistory();
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyhNxMos2ipjVhT7xtbmsMjEu9SFpvFCmV0bBp_FMhEf38LSEb4cB7l_onDsTtpWQl_bQ/exec'
    const form = document.forms['submit-to-google-sheet']



    const addEventListener = e => {
        console.log("hi");
         e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => 
           // console.log('Success!', response)
            history.push("/")
            )
            .catch(error => console.error('Error!', error.message))
    };
    return (
        <>
        <br></br>
        <h1>CONTACT ME</h1>
        <div>________XXX______</div>
        <br></br>
        <h4>I"LL BE GLAD TO ANSWER YOUR QUESTIONS</h4>
            <form name="submit-to-google-sheet" className="ContactForm">
                <div className="form-group">
                    <label >Email address:</label>
                    <input type="email" className="form-control" id="email" name="email" placeholder="Email "/>
                </div>
                <div class="form-group">
                    <label >Name:</label>
                    <input type="text" className="form-control" id="name" name="firstName" placeholder="Name"/>
                </div>
                <div class="form-group">
                    <label htmlFor="name">Message:</label>
                    <input type="text" className="form-control" id="message" name="Message" placeholder="Message" />
                </div>
                <br></br>
               
                
            </form>
            <div class="frame">
            <button className="custom-btn btn-5" type="submit" onClick={addEventListener}><span>Send Message</span></button>
            </div>
            
        </>
    )
}
export default ContactMe;