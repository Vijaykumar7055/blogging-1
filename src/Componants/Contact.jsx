import React from 'react'
import { useState,useEffect } from 'react';
const Contact = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      // Handle form submission logic here (e.g., send form data to a server)
      alert('Form submitted successfully!');
    }
    setValidated(true);
  };

  return (
    <div className="d-flex mt-5 justify-content-center align-items-center vh-100">
      <form
        noValidate
        className={`text-center ${validated ? 'was-validated' : ''}`}
        onSubmit={handleSubmit}
       
      >
        <h2>Contact us</h2>

       <div className="row col-md-12">
       <div className="mb-3 col-md-6">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            required
          />
          <div className="invalid-feedback ">
            Please provide your name.
          </div>
        </div>

        <div className="mb-3 col-md-6">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            required
          />
          <div className="invalid-feedback">
            Please provide your email.
          </div>
        </div>

        <div className="mb-3 col-md-12">
          <label htmlFor="subject" className="form-label">Subject</label>
          <input
            type="text"
            className="form-control"
            id="subject"
            required
          />
          <div className="invalid-feedback">
            Please provide a mail subject.
          </div>
        </div>

        <div className="mb-3 col-md-12">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            className="form-control"
            id="message"
            rows="3"
            required
          ></textarea>
          <div className="invalid-feedback">
            Please provide a message text.
          </div>
        </div>

       </div>
        <div className="form-check d-flex justify-content-center mb-4">
          <input
            className="form-check-input"
            type="checkbox"
            id="copy"
          />
          <label className="form-check-label" htmlFor="copy">
            Send me a copy
          </label>
        </div>

        <button type="submit" className="btn btn-primary btn-block mb-5">
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact