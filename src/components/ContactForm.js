import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // const [status, setStatus] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleChange = (event) => {
    const field = event.target.id;
    if (field === "name") {
      setName(event.target.value);
    } else if (field === "email") {
      setEmail(event.target.value);
    } else if (field === "message") {
      setMessage(event.target.value);
    }
  };

  return (
    <form onSubmit={handleSubmit} method="POST">
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
