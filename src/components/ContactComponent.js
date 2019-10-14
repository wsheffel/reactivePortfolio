import React, { useReducer } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Contact = () => {
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      name: "",
      company: "",
      email: "",
      phone: "",
      message: ""
    }
  );

  const success = () =>
    toast.warning("Form successfully submitted", {
      // autoClose: 2000,
      className: "myToast"
    });

  const handleChange = e => {
    setUserInput({ [e.target.name]: e.target.value });
  };

  const sendData = e => {
    e.preventDefault();
    const url = "http://localhost:5050/form-data"; // The endpoint
    axios // Make the request
      .post(url, { formData: userInput })
      .then(res => console.log(res.data.msg))
      .then(success())
      .catch(err => console.error(err));
  };

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
                  required
                  value={userInput.firstName}
                  onChange={handleChange}
                />
              </p>
              <p>
                <label>Company</label>
                <input
                  type="text"
                  name="company"
                  value={userInput.firstName}
                  onChange={handleChange}
                />
              </p>
              <p>
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={userInput.firstName}
                  onChange={handleChange}
                  required
                />
              </p>
              <p>
                <label>Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  value={userInput.firstName}
                  onChange={handleChange}
                />
              </p>
              <p className="full">
                <label>Message</label>
                <textarea
                  name="message"
                  rows="5"
                  value={userInput.firstName}
                  onChange={handleChange}
                ></textarea>
              </p>
              <p className="full">
                <button>Submit</button>
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
