// src/components/ContactForm.tsx

import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit the form to the backend
    console.log("Form Data Submitted:", formData);
  };

  return (
    <section className="contact-form-section" style={{ padding: "50px 20px", backgroundColor: "#f8f9fa" }}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ display: "block", margin: "10px 0", padding: "10px", width: "100%" }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ display: "block", margin: "10px 0", padding: "10px", width: "100%" }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          style={{ display: "block", margin: "10px 0", padding: "10px", width: "100%" }}
        />
        <button type="submit" style={{ padding: "10px 20px", backgroundColor: "#007bff", color: "#fff", border: "none" }}>
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
