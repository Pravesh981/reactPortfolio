import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import ContactCover from '../assests/images/a-full-stack-developer-with-a-diverse-range-of-ski-95Qaq2EuReOK1IwsEHh6Vw-qzJSnhLrT5uGWGJYueCX-g.jpeg';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    submitting: false,
    error: null,
    success: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, error: null, success: false });

    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      phone_number: formData.phone,
      message: formData.message
    };

    try {
      await emailjs.send(
        'service_69zr2sp',
        'template_7fmwy61',
        templateParams,
        '3vvDeb_EadBThBj24'
      );

      setStatus({
        submitting: false,
        error: null,
        success: true
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus(prev => ({ ...prev, success: false }));
      }, 5000);

    } catch (error) {
      setStatus({
        submitting: false,
        error: 'Failed to send message. Please try again.',
        success: false
      });
    }
  };

  return (
    <div className="contactPage common-spacing">
      <div className="row">
        <div className="contactLeft col-lg-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label">
                Full Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="name"
                className="form-control"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={status.submitting}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email <span className="text-danger">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control inputField"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={status.submitting}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="form-control"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                disabled={status.submitting}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message <span className="text-danger">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                className="form-control"
                rows="4"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={status.submitting}
              />
            </div>

            {status.error && (
              <div className="alert alert-danger" role="alert">
                {status.error}
              </div>
            )}

            {status.success && (
              <div className="alert alert-success" role="alert">
                Message sent successfully!
              </div>
            )}

            <button 
              type="submit" 
              className="btn-style-1"
              disabled={status.submitting}
            >
              {status.submitting ? 'Sending...' : 'Submit'}
            </button>
          </form>
        </div>
        <div className="contactRight col-lg-6 col-sm-12">
          <img 
            src={ContactCover} 
            alt="Contact Us" 
            className="w-100 contactImg" 
          />
        </div>
      </div>
    </div>
  );
}