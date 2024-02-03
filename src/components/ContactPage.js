// src/components/ContactPage.js
import React, { useState } from 'react';

const ContactPage = ({ history }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    emailAddress: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission logic (e.g., send data to a server)
    // For now, let's just log the form data to the console
    console.log('Form Data:', formData);
    // Redirect the user back to the Home Page
    history.push('/');
  };

  return (
    <div className="contact-page">
      <h2>Contact Me</h2>
      <div className="contact-info">
        <p>Contact Information:</p>
        <p>Email: your.email@example.com</p>
        <p>Phone: +1 234 567 890</p>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />

        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />

        <label htmlFor="contactNumber">Contact Number:</label>
        <input
          type="tel"
          id="contactNumber"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
          required
        />

        <label htmlFor="emailAddress">Email Address:</label>
        <input
          type="email"
          id="emailAddress"
          name="emailAddress"
          value={formData.emailAddress}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactPage;
