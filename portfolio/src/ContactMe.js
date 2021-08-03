import React from "react";

import "./ContactMe.css";
const ContactMe = () => {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyhNxMos2ipjVhT7xtbmsMjEu9SFpvFCmV0bBp_FMhEf38LSEb4cB7l_onDsTtpWQl_bQ/exec'
    const form = document.forms['submit-to-google-sheet']



    const addEventListener = e => {
        console.log("hi");
         e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => console.log('Success!', response))
            .catch(error => console.error('Error!', error.message))
    };
    return (
        <>
            <form name="submit-to-google-sheet" className="ContactForm">
                <div className="form-group">
                    <label >Email address:</label>
                    <input type="email" className="form-control" id="email" name="email"/>
                </div>
                <div class="form-group">
                    <label >Name:</label>
                    <input type="text" className="form-control" id="name" name="firstName" placeholder="Name"/>
                </div>
                <div class="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" className="form-control" id="message" name="Message" placeholder="Message" />
                </div>
                
                <button type="submit" className="btn btn-default" onClick={addEventListener}>Submit</button>
            </form>

        </>
    )
}
export default ContactMe;