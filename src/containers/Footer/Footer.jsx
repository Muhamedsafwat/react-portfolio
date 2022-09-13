import React, { useState } from "react";

import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import { client } from "../../client";
import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formData;

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [buttonText, setButtonText] = useState("Send message");
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (formData.email && formData.name && formData.message) {
      setButtonText("Sending...");

      const contact = {
        _type: "contact",
        name: name,
        email: email,
        message: message,
      };

      client.create(contact).then(() => {
        setIsFormSubmitted(true);
      });
    } else {
      setButtonText("Enter valid data");
      setTimeout(() => {
        setButtonText("Send message");
      }, 4000);
    }
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="Email" />
          <a href="mailto: musafwat666@gmail.com" className="p-text">
            Musafwat666@gmail
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="Mobile" />
          <a href="tel: +201016596908" className="p-text">
            +20 1016596908
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              type="text"
              placeholder="Your name"
              className="p-text"
              onChange={handleChange}
              value={name}
              name="name"
            />
          </div>
          <div className="app__flex">
            <input
              type="email"
              placeholder="Your email"
              className="p-text"
              onChange={handleChange}
              value={email}
              name="email"
            />
          </div>
          <div>
            <textarea
              placeholder="Your message"
              className="p-text"
              onChange={handleChange}
              value={message}
              name="message"
            />
          </div>
          <button className="p-text" onClick={handleSubmit}>
            {buttonText}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
