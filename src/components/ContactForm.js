import React, { useState } from "react";
import classes from "./contactForm.module.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleChange = (event) => {
    const field = event.target.id;
    switch (field) {
      case "name":
        setName(event.target.value);
        break;
      case "email":
        setEmail(event.target.value);
        break;
      case "number":
        setNumber(event.target.value);
        break;
      case "message":
        setMessage(event.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <form className={classes.form} method="POST">
      <h1>Contact Us</h1>
      <label>Name</label>
      <input
        id="name"
        value={name}
        onChange={handleChange}
        placeholder="Write your name here.."
        required
      ></input>

      <label>Email</label>
      <input
        id="email"
        value={email}
        onChange={handleChange}
        placeholder="Enter your e-mail"
        required
      ></input>

      <label>Contact Number</label>
      <input
        id="number"
        value={number}
        onChange={handleChange}
        placeholder="Let us know how to contact you back.."
        required
      ></input>

      <label>Message</label>
      <textarea
        id="message"
        value={message}
        onChange={handleChange}
        placeholder="What would you like to tell us.."
        required
        rows="3"
      ></textarea>

      <button type="submit" onClick={handleSubmit}>
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
