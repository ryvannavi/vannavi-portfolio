import React, { useState, useEffect } from "react";
import "./Hero.css";

function Hero({ onNavigate }) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    "Web Developer",
    "AWS Enthusiast",
    "User Support Specialist",
  ];

  useEffect(() => {
    const currentRole = roles[textIndex];
    const speed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText.length < currentRole.length) {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
      } else if (isDeleting && displayText.length > 0) {
        setDisplayText(displayText.slice(0, -1));
      } else if (!isDeleting && displayText.length === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText.length === 0) {
        setTextIndex((prev) => (prev + 1) % roles.length);
        setIsDeleting(false);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex]);

  const handleViewWork = () => {
    if (onNavigate) {
      onNavigate("project");
    }
  };

  const handleGetInTouch = () => {
    if (onNavigate) {
      onNavigate("contact");
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-grid">
          {/* LEFT SIDE - TEXT */}
          <div className="hero-text">
            <h1>
              Hello, I'm <span className="highlight">Vannavi</span>
            </h1>

            <h2>
              <span style={{ color: "#a85a3a" }}>Creative</span>
              <span className="typed" style={{ color: "#2d2d2d" }}>
                {displayText}
                <span className="cursor">|</span>
              </span>
            </h2>

            <p>
              Dual-degree student in IT Management (AUPP) and Computer Science
              (Fort Hays State University), driven by a passion for web
              development, cloud technologies, and turning innovative ideas into
              real world digital solutions.
            </p>

            <div className="hero-buttons">
              <button onClick={handleViewWork} className="btn btn-primary">
                View My Work
              </button>
              <button onClick={handleGetInTouch} className="btn btn-outline">
                Get In Touch
              </button>
            </div>

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
                onClick={(e) => {}}
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

          {/* RIGHT SIDE - PHOTO & FLOATING BOXES */}
          <div className="hero-image">
            <div className="image-wrapper">
              <img src="/Picture.jpg" alt="Vannavi Ry" />

              <div className="floating-elements">
                <div className="floating-card design">
                  <i className="fa-solid fa-palette"></i>
                  <span>Design</span>
                </div>
                <div className="floating-card code">
                  <i className="fa-solid fa-code"></i>
                  <span>Code</span>
                </div>
                <div className="floating-card ideas">
                  <i className="fa-solid fa-lightbulb"></i>
                  <span>Ideas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
