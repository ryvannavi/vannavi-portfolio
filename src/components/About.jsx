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
      status: "Senior Student",
      icon: "fa-book",
    },
    {
      degree: "Bachelor's in Computer Science",
      university: "Fort Hays State University",
      status: "Senior Student",
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
    { icon: "fa-pen-ruler", text: "Design & Visual" },
    { icon: "fa-cloud", text: "Cloud Engineering" },
    { icon: "fa-lightbulb", text: "Innovation" },
    { icon: "fa-globe", text: "Global Perspective" },
  ];

  const stats = [
    { number: "3", label: "Projects Completed" },
    { number: "3", label: "Work Experiences" },
    { number: "3", label: "AWS Certifications" },
    { number: "2", label: "Degrees" },
  ];

  return (
    <section className="about">
      <div className="container">
        <div className="about-header">
          <h1>
            About <span className="highlight">Me</span>
          </h1>
          <p className="subtitle">
            Information Technology Management | Computer Science
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="about-content">
          {/* Left: Introduction */}
          <div className={`about-intro ${isVisible ? "fade-in" : ""}`}>
            <h2>Who I Am</h2>
            <p>
              I'm an Information Technology Management and Computer Science
              student who works across both sides of a product — the code that
              runs it and the design that makes people want to use it. I build
              web applications with React and Laravel, and I've earned three AWS
              Academy certifications in cloud foundations, architecting, and
              operations.
            </p>

            <p>
              In 2026 I completed a professional design internship at Jumpy Jar
              in Sydney, working remotely to produce educational resources and
              marketing graphics for early childhood educators. It taught me to
              work to a brand identity, take feedback in weekly design reviews,
              and ship to deadline across a nine-hour time difference. I'm now
              looking for work where that mix of development and design is
              genuinely useful.
            </p>

            {/* Stats */}
            <div className="about-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
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
              "Remote Work",
              "Communication",
              "Problem Solving",
              "Attention to Detail",
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
