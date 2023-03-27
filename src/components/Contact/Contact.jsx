
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";


const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;





const Contact = () => {
  const showAlert = () => {
    alert("Message sent successfully");
    setShow(!show);
  
  }
  const form = useRef();
  const [show, setShow] = useState(false);

  const sendEmail = (e) => {
   
    e.preventDefault();

    

    emailjs
      .sendForm(
        serviceId,
        templateID,
        form.current,
        publicKey,
      )
      .then(
        (result) => {
          e.target.reset()
          console.log(result.text);
          console.log("message sent");
        
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    // <div className="formbackground">
    //   <div className="formimage">
        <div className={"contactcontainer"}>
   
          <form className="contactform" ref={form} onSubmit={sendEmail}>
            <div className="contactus">Chat with Luke</div>
            <div className="touch">Let's get in touch</div>
            <div className="chatform">
              I want to hear from you! Please fill out the form below and I will get back to you as soon as possible.
            </div>
            <label className="labelform">Name</label>
            <input className="inputform" type="text" name="user_name" />
            <label className="labelform">Email</label>
            <input className="inputform" type="email" name="user_email" />
            <label className="labelform">Message</label>
            <textarea className="textareaform" name="message" />
            {/* <input className="inputformsubmit" type="submit" value="Send" /> */}
            <button className="inputformsubmit" type="submit" value="Send" onClick={showAlert}>Send</button>
          </form>
        </div>
    //   </div>
    //  </div>
  );
};

export default Contact;