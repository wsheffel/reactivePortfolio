import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import formUrl from "../config/form-url"; // The endpoint

const Contact = () => {
  const initialState = {
    name: "",
    company: "",
    email: "",
    phone: "",
    message: ""
  };

  const [userInput, setUserInput] = useState(initialState);

  // My custom toast
  const success = () => {
    toast.warning(() => (
      <div className="myToast">
        <p>
          {" "}
          Thank you for reaching out{" "}
          <span role="img" aria-label="text">
            👍
          </span>
        </p>
        <span style={{ float: "right" }} role="img" aria-label="author">
          <b>-</b> Dzenis
        </span>
      </div>
    ));
  };

  const handleChange = e => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setUserInput({ ...initialState });
  };

  const sendData = e => {
    e.preventDefault();
    axios // Make the request to the backend
      .post(formUrl, { formData: userInput }) // e.g. "http://localhost:5050/form-data"
      .then(res => console.log(res.data.msg))
      .then(resetForm()) // Reset the form
      .then(success()) // Show the toast
      .catch(err => console.error(err)); // Catch any error
  };

  const { name, company, phone, email, message } = userInput;

  return (
    <main id="contact">
      <h1 className="lg-heading textShadow">
        Contact
        <i className="text-secondary textShadow"> Me</i>
      </h1>

      <div className="contact-container">
        <div className="wrapper animated bounceInLeft">
          <div className="company-info">
            <h2 className="lead textShadow">Additional info:</h2>
            <small className="text-secondary">
              For convenience, the contact info is clickable
            </small>
            <ul className="contact-list">
              <li className="xo">
                <a
                  href="https://www.linkedin.com/in/dzenis-h/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin-in"></i>
                  Find me on LinkedIn
                </a>
              </li>

              <li className="xo">
                <a href="mailto:dzenis.hankusic@gmail.com">
                  <i className="fas fa-at"></i>
                  Send me an Email
                </a>
              </li>

              <li className="xo">
                <a href="tel:00387603311015">
                  <i className="fas fa-mobile-alt"> </i>
                  Call my Phone
                </a>
              </li>

              <li className="xo">
                <a href="skype:dzenis.hankusic?call">
                  <i className="fab fa-skype"></i>
                  Call me via Skype
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT FORM */}
          <div className="contact">
            <h1 className="contact-heading">Contact Form</h1>
            <p className="contact-plus">
              Contact me using this form or any other contact info provided
            </p>

            <form id="contact-form" onSubmit={sendData}>
              <p>
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  required
                  placeholder="REQUIRED"
                />
              </p>
              <p>
                <label>Company</label>
                <input
                  type="text"
                  name="company"
                  value={company}
                  onChange={handleChange}
                  placeholder="OPTIONAL"
                />
              </p>
              <p>
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  required
                  placeholder="REQUIRED"
                />
              </p>
              <p>
                <label>Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  value={phone}
                  onChange={handleChange}
                  placeholder="OPTIONAL"
                />
              </p>
              <p className="full">
                <label>Message</label>
                <textarea
                  name="message"
                  rows="5"
                  value={message}
                  onChange={handleChange}
                  required
                  placeholder="REQUIRED"
                ></textarea>
              </p>
              <p className="full">
                <button type="submit">Submit</button>
              </p>
            </form>
          </div>
        </div>
        <ToastContainer autoClose={3000} closeOnClick />
      </div>
    </main>
  );
};

export default Contact;
