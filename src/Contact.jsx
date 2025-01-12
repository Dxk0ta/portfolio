import React, { useState } from 'react';
import './Contact.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import emailjs from 'emailjs-com';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare template parameters
    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        'service_0zquyhu',         // Replace with your EmailJS Service ID
        'template_iieowqb',        // Replace with your EmailJS Template ID
        templateParams,
        'DxXiOmyAy4e7JeARz'          // Replace with your EmailJS Public Key
      )
      .then(() => {
        setStatusMessage('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setStatusMessage('Failed to send message. Please try again later.');
      });
  };

  return (
    <div id="contact" className="contact">
      <h2>Contact</h2>
      <p>Have a question or want to work together? Leave your details and I’ll get back to you as soon as possible.</p>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
        {statusMessage && <p className="status-message">{statusMessage}</p>}
      </form>
      <div className="social-icons">
        <a href="https://linkedin.com/in/dxk0ta" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Dxk0ta" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default Contact;