import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import './style.css'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f9cx308",
        "template_vay24te",
        form.current,
        "97IPuAn58TnfZVWFU"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <form className='contact-form' ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input placeholder="Name:" type="text" name="user_name" />
        <label>Email</label>
        <input placeholder="Email:" type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input className="input-btn" type="submit" value="Send" />
      </form>
    </>
  );
};

export default Contact;