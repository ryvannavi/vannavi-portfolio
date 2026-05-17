import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  useEffect(() => {
    emailjs.init("hXqjk5HrCEmEgxoMk");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    const templateParams = {
      to_email: "vannaviryy@gmail.com",
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs.send("service_xrrq6wf", "template_5v6efa4", templateParams).then(
      (response) => {
        console.log("Email sent successfully:", response);
        setSubmitStatus("success");
        alert("Message sent successfully! I'll get back to you soon.");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus(""), 3000);
      },
      (error) => {
        console.error("Email send failed:", error);
        setSubmitStatus("error");
        alert(
          "Failed to send message. Please try again or contact me directly."
        );
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus(""), 3000);
      }
    );
  };

  return (
    <section className="contact">
      <div className="container">
        <div className="contact-header">
          <h1>
            Contact <span className="highlight">Information</span>
          </h1>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div>
                <h4>Phone</h4>
                <a href="tel:+85587614800">+855 87 614 800 @vannaviry</a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div>
                <h4>Email</h4>
                <a href="mailto:vannaviryy@gmail.com">vannaviryy@gmail.com</a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div>
                <h4>Location</h4>
                <p>
                  Svay Ta-Ouk Village, Sangkat Chba Ompov District
                  <br />
                  Phnom Penh, Cambodia
                </p>
              </div>
            </div>
          </div>

          <div className="social-section">
            <h4>Connect With Me</h4>
            <div className="social-links">
              <a
                href="https://github.com/ryvannavi"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=vannaviryy@gmail.com"
                target="_blank"
                title="Gmail"
              >
                <i className="fa-solid fa-envelope"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/vannavi-ry-4a043927b"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
