import { useState } from "react";
import { Github, Linkedin, PhoneCall } from "lucide-react";  // Import social icons

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div id="contactUsPageContainer">
      <h1 id="contactUsheader">Contact Us</h1>
      <div className="Contactcontainer">
        <h2 className="Contacttext-center">Get in Touch</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label id="ContactLabel" htmlFor="name">Name:</label>
            <input id="Contactinput" type="text" value={formData.name} onChange={handleChange} required placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label id="ContactLabel" htmlFor="email">Email:</label>
            <input id="Contactinput" type="email"  value={formData.email} onChange={handleChange} required placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label id="ContactLabel" htmlFor="message">Message:</label>
            <textarea id="message" value={formData.message} onChange={handleChange} required rows="4" placeholder="Your message"></textarea>
          </div>
          <button className="ContactButtons" type="submit">Send Message</button>
        </form>


        {/* Social Links with Icons */}
        <div className="social-links">
         
          <a href="https://github.com/Adityabhatt37" target="_blank" rel="noopener noreferrer">
            <Github className="social-icon" /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/aditya-bhatt3737/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="social-icon" /> LinkedIn
          </a>
          <a href="tel:9456785685">
            <PhoneCall className="social-icon" /> WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
