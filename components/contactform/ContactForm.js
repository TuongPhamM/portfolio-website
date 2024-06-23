import React, { useState } from "react";
import emailjs from "emailjs-com";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_27y0ton", // Replace with your EmailJS service ID
        "template_lrasn8f", // Replace with your EmailJS template ID
        formData,
        "IrUVt6NjIdhfZqFXA" // Replace with your EmailJS user ID
      )
      .then((result) => {
        alert("Thank you for your message.");
      })
      .catch((error) => {
        alert("Failed to send message, please try again later.");
      });
  };

  return (
    <div className={styles.contactFormContainer}>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="firstName">Name</label>
          <input
            type="text"
            id="mame"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
