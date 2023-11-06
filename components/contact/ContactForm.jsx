import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [successMessage, setSuccessMessage] = useState(''); // Initialize success message state

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    loan: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from submitting

    // Validate the form fields
    const newErrors = {};
    if (formData.name.trim() === '') {
      newErrors.name = 'Name is required';
    }
    if (formData.email.trim() === '') {
      newErrors.email = 'Email is required';
    }
    if (formData.phone.trim() === '') {
      newErrors.phone = 'Phone is required';
    }
    if (formData.loan.trim() === '') {
      newErrors.loan = 'Service interested in is required';
    }

    // Check if there are any errors
    if (Object.keys(newErrors).length === 0) {
      // Form is valid, you can submit the data or perform other actions
      console.log('Form data:', formData);
      setSuccessMessage('Message Sent!');

      sendEmail(formData.name,formData.email,formData.phone,formData.loan,formData.message)


    } else {
      // There are validation errors, update the state
      setErrors(newErrors);
    }
  };

  function sendEmail(name,email,phone,loan,message){

    const templateParam={
      name:name,
      email:email,
      phone:phone,
      loan:loan,
      message:message,
    }

    emailjs.send('service_t75hx4n', 'template_imwffwh', templateParam, 'FAUfdkoBk63a7Ne2q')
    .then((response) => {
      console.log('SUCCESS!', response, response.text);
    }, (error) => {
      console.log('FAILED...', error);
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-6">
          <div className="single-input">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="What's your name?"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
        </div>
        <div className="col-6">
          <div className="single-input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="What's your email?"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="single-input">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="(123) 480 - 3540"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
            {errors.phone && <p className="error">{errors.phone}</p>}
          </div>
        </div>
        <div className="col-6">
          <div className="single-input">
            <label htmlFor="loan">Service interested in</label>
            <input
              type="text"
              id="loan"
              name="loan"
              placeholder="Ex. Micro Financing, Consumer Durable Finance"
              value={formData.loan}
              onChange={handleInputChange}
              required
            />
            {errors.loan && <p className="error">{errors.loan}</p>}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="single-input">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="I would like to get in touch with you..."
              cols="30"
              rows="10"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
        </div>
      </div>
      <div className="btn-area text-center">
        <button type="submit" className="cmn-btn" disabled={successMessage ? true : false}>
        {successMessage ? successMessage : "Send Message"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
