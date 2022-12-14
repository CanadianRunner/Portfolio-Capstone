import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Card } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "../../scss/contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p5sqp5b",
        "template_4pvoxgs",
        form.current,
        "a4YzlKwJPLkvH2eOz"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact__card">
      <Card variant="outlined" className="card" sx={{ background: "#A5C9CA" }}>
        <div className="contact__title">
          <h1>Let's get talking!</h1>
        </div>
        <div className="contact__icons">
          <div className="contact__link">
          <div className="contact__linkedin">
            <FontAwesomeIcon icon={faLinkedin} color="#213D58" size="3x" />
          </div>
          </div>
          <div className='contact__link'>
          <div className="contact__github">
            <FontAwesomeIcon icon={faGithub} color="#213D58" size="3x" />
          </div>
          </div>
          <div className="contact__link">
          <div className="contact__email">
            <FontAwesomeIcon icon={faEnvelope} color="#213D58" size="3x" />
          </div>
          </div>
        </div>
        <div className="contact__input">
          <form ref={form} onSubmit={sendEmail}>
            <label>Name: </label>
            <input type="text" name="user_name" />
            <label>Email: </label>
            <input type="email" name="user_email" />
            <label>Message: </label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </form>
        </div>
      </Card>
    </div>
  );
};

export default Contact;
