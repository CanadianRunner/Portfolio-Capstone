import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Card } from '@mui/material';
// import { faLinkedIn} from '@fortawesome/free-solid-svg-icons';
// import { faLinkedIn } from '@fortawesome/free-brands-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import "../../scss/contact.scss";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_p5sqp5b', 'template_4pvoxgs', form.current, 'a4YzlKwJPLkvH2eOz')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);

          // const toastifySuccess = () => {
          //   toast('Form sent!', {
          //     position: 'bottom-right',
          //     autoClose: 5000,
          //     hideProgressBar: true,
          //     closeOnClick: true,
          //     pauseOnHover: true,  
          //     draggable: false,
          //     className: 'submit-feedback success',
          //     toastId: 'notifyToast'
          //   });
          // };
      });
  };

  return (
    <div className="contact__card">
    <Card variant="outlined" className='card' sx={{background: '#A5C9CA'}}> 
    <h1>Let's get talking!</h1>
    {/* <div className='navbar__link'>
        {/* <span className='navbar__contact'>
            <FontAwesomeIcon icon={faLinkedIn} color="#A5C9CA" size='2x' />
            <FontAwesomeIcon icon="fa-brands fa-linkedin" />
             
             */}
         {/* </span>  */}
      {/* </div>  */}
    <div className='contact__input'>
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    </div>
    </Card>
    </div>
  );
};

export default Contact;