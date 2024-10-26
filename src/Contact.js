import React from 'react';
import './Contact.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <h2>Contact Me</h2>
      <p>Email: dxkotacamps@gmail.com</p>
      <p>Phone: (530) 798-8232</p>
      <div className="social-icons">
        <a href="https://linkedin.com/in/dxk0ta" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/Dxk0ta" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      </div>
    </div>
  );
};

export default Contact;
