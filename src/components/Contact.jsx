import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        console.log('Form submitted successfully');
        // Clear form data after successful submission if needed
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form className="cf" onSubmit={handleSubmit} id='contact'>
      <h1>Contact</h1>
      <div className="half left cf">
        <input
          type="text"
          id="input-name"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          id="input-email"
          name="email"
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          id="input-subject"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
        />
      </div>
      <div className="half right cf">
        <textarea
          name="message"
          id="input-message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>
      <input type="submit" value="Submit" id="input-submit" />
    </form>
  );
}

export default Contact;
