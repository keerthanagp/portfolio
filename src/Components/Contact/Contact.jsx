import React from 'react';
import "./Contact.css"
import {MdOutlineMail} from "react-icons/md";
import {BsWhatsapp} from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form=useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d19bs19', 'template_yvkpoq5', form.current, 'hcGSO5Qj_jlfu7kyr')
     e.target.reset()
  };
  return (
    <section id='Contact'>
      <h2>Get In Touch</h2>
      <h1>Contact Me</h1>

      <div className='contactcontainer'>
        <article className='contactoption'>
          <a className='social'><MdOutlineMail/></a>
          <h4>Email</h4>
          <h5>keerthanaperumal1515@gmail.com</h5>
          <a href='mailto: keerthanaperumal1515@gmail.com' target='blank'>Send a message</a>
        </article>
        <article className='contactoption'>
        <a className='social'><BsWhatsapp/></a>
          <h4>Whatsapp</h4>
          <h5>7305357552</h5>
          <a href='https://api.whatsapp.com/send?phone=+917305357552' target='blank'>Send a message</a>
        </article>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <input type='text' name='name' placeholder='Enter your Name' required/>
        <input type='email' name='email' placeholder='Your Email' required/>
        <textarea name='message'rows='7'placeholder='Your Message' required/>
        <button type='submit' className='btn btn-primary'>Send Message</button>

      </form>
    </section>
  )
}

export default Contact