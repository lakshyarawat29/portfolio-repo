import React, { useState } from 'react';
import './ContactUs.css';
import linkedin from '../assets/techIcons/LinkedIn.png';
import facebook from '../assets/socialMedia/facebook.png';
import github from '../assets/socialMedia/github1.png';
import insta from '../assets/socialMedia/insta.png';
import twitter from '../assets/socialMedia/twitter.png';
const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="main-div">
      <div className="upper-main-div">
        <h1>Contact Us</h1>
      </div>
      <div className="lower-main-div">
        <div className="lower-left-div">
          <div className="form-div">
            <h2>Contact Form</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Name
                <input
                  type="text"
                  placeholder="Lakshya Rawat"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="lakshyarawat29@gmail"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
        <div className="lower-right-div">
          <h2>Our Social Media</h2>
          <div className="links-div">
            <a href="https://www.linkedin.com">
              <img src={linkedin} />
            </a>
            <a href="https://www.linkedin.com">
              <img src={twitter} />
            </a>
            <a href="https://www.linkedin.com">
              <img src={insta} />
            </a>
            <a href="https://www.linkedin.com">
              <img src={github} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
