import React, { useState, useEffect } from "react";
import "./Header.css";

function Header({ onNavigate, currentPage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isExperienceDropdownOpen, setIsExperienceDropdownOpen] =
    useState(false);

  // Close dropdown on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsExperienceDropdownOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (page, tab = null) => {
    onNavigate(page, tab);
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container-header">
        <div className="logo">
          <span className="logo-text">
            Vannavi <span className="logo-highlight">Ry</span>
          </span>
        </div>

        <nav className="navbar">
          <button
            className="hamburger"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>

          <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
            <li>
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("home");
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("about");
                }}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("skills");
                }}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#project"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("project");
                }}
              >
                Project
              </a>
            </li>

            {/* Experience with Dropdown */}
            <li className="dropdown-item">
              <button
                className="dropdown-toggle"
                onClick={() =>
                  setIsExperienceDropdownOpen(!isExperienceDropdownOpen)
                }
              >
                Experience
                <i
                  className={`fa-solid fa-chevron-down ${
                    isExperienceDropdownOpen ? "open" : ""
                  }`}
                ></i>
              </button>
              <ul
                className={`dropdown-menu ${
                  isExperienceDropdownOpen ? "active" : ""
                }`}
              >
                <li>
                  <a
                    href="#experience"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick("experience");
                    }}
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    href="#certification"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick("experience", "certification");
                    }}
                  >
                    Certification
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("contact");
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="header-social">
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
    </header>
  );
}

export default Header;
