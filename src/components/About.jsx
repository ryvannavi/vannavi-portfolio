import React, { useState, useEffect } from "react";
import "./About.css";

function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const education = [
    {
      degree: "Bachelor's in Information Technology Management",
      university: "American University of Phnom Penh",
      status: "Junior Student",
      icon: "fa-book",
    },
    {
      degree: "Bachelor's in Computer Science",
      university: "Fort Hays State University",
      status: "Junior Student",
      icon: "fa-laptop",
    },
    {
      degree: "Graduated National Exam",
      university: "Serey Sophorn Highschools",
      status: "2017 - 2022",
      icon: "fa-graduation-cap",
    },
  ];

  const languages = [
    { name: "Khmer", level: "Mother Tongue", proficiency: 100 },
    { name: "English", level: "Advanced", proficiency: 85 },
  ];

  const interests = [
    { icon: "fa-code", text: "Web Development" },
    { icon: "fa-cloud", text: "Cloud Engineering" },
    { icon: "fa-lightbulb", text: "Innovation" },
    { icon: "fa-globe", text: "Global Perspective" },
  ];

  return (
    <section className="about">
      <div className="container">
        <div className="about-header">
          <h1>
            About <span className="highlight">Me</span>
          </h1>
          <p className="subtitle">
            Information Technologies Management | Computer Sicenes{" "}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="about-content">
          {/* Left: Introduction */}
          <div className={`about-intro ${isVisible ? "fade-in" : ""}`}>
            <h2>Who I Am</h2>
            <p>
              As an Information Technology Management and Computer Science
              student, I am deeply passionate about exploring, learning, and
              applying emerging technologies. Motivated by curiosity and a
              commitment to continuous growth, I actively seek opportunities to
              gain hands-on experience and contribute to innovative projects
              that make a meaningful impact.
            </p>

            <p>
              I aim to expand my practical skills in dynamic and collaborative
              environments. By combining technical knowledge with
              problem-solving abilities, my goal is to become a technology
              professional who bridges the gap between innovative ideas and
              real-world solutions, delivering value through creativity and
              expertise.
            </p>

            {/* Stats */}
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">1</div>
                <div className="stat-label">Project Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">3</div>
                <div className="stat-label">Work Experiences</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">2</div>
                <div className="stat-label">Degrees</div>
              </div>
            </div>
          </div>

          {/* Right: Education & Info */}
          <div className={`about-details ${isVisible ? "fade-in" : ""}`}>
            {/* Education Timeline */}
            <div className="education-section">
              <h3>
                <i className="fa-solid fa-graduation-cap"></i> Education
              </h3>
              <div className="education-timeline">
                {education.map((edu, index) => (
                  <div key={index} className="education-item">
                    <div className="edu-icon">
                      <i className={`fa-solid ${edu.icon}`}></i>
                    </div>
                    <div className="edu-content">
                      <h4>{edu.degree}</h4>
                      <p className="university">{edu.university}</p>
                      <span className="status">{edu.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="languages-section">
              <h3>
                <i className="fa-solid fa-language"></i> Languages
              </h3>
              <div className="languages-list">
                {languages.map((lang, index) => (
                  <div key={index} className="language-item">
                    <div className="lang-header">
                      <span className="lang-name">{lang.name}</span>
                      <span className="lang-level">{lang.level}</span>
                    </div>
                    <div className="lang-bar">
                      <div
                        className="lang-progress"
                        style={{ width: `${lang.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Interests Section */}
        <div className={`interests-section ${isVisible ? "fade-in" : ""}`}>
          <h3>What Drives Me</h3>
          <div className="interests-grid">
            {interests.map((interest, index) => (
              <div key={index} className="interest-card">
                <div className="interest-icon">
                  <i className={`fa-solid ${interest.icon}`}></i>
                </div>
                <p>{interest.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className={`soft-skills-section ${isVisible ? "fade-in" : ""}`}>
          <h3>Soft Skills</h3>
          <div className="soft-skills-tags">
            {[
              "Team Collaboration",
              "Communication",
              "Problem Solving",
              "Quick Learner",
              "Time Management",
              "Adaptability",
            ].map((skill, index) => (
              <div key={index} className="skill-badge">
                <i className="fa-solid fa-check"></i>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
