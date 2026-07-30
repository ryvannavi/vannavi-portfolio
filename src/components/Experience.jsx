import React, { useState } from 'react';
import './Experience.css';

function Experience({ initialTab = 'resume', onTabChange }) {
  const [selectedTab, setSelectedTab] = useState(initialTab);

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  const education = [
    {
      id: 1,
      degree: 'Bachelor\'s of Information Technology Management',
      school: 'American University of Phnom Penh',
      period: 'Senior Student',
      description: 'Focus on IT system development and web technologies.'
    },
    {
      id: 2,
      degree: 'Bachelor\'s of Computer Science',
      school: 'Fort Hays State University',
      period: 'Senior Student',
      description: 'Strong foundation in computer science principles and applications.'
    },
    {
      id: 3,
      degree: 'Graduated National Exam',
      school: 'Serey Sophorn Highschools',
      period: '2017 - 2022',
      description: 'Banteay Meanchey Province.'
    }
  ];

  const experience = [
    {
      id: 1,
      title: 'Graphic Design Intern',
      company: 'Jumpy Jar',
      period: 'June 2026 – September 2026',
      location: 'Sydney, Australia (Remote)',
      description: [
        'Designed child-friendly educational worksheets, activity packs, and classroom resources for children aged 3–5 using Adobe Illustrator and Canva.',
        'Created print-ready layouts, illustrations, and learning materials aligned with EYLF v2.0 standards.'
      ]
    },
    {
      id: 2,
      title: 'Online Business Owner',
      company: 'Small Business (Online Shop)',
      period: '2022 - 2025',
      location: 'Online Platform',
      description: [
        'Managed online sales, customer communication, product promotion, and daily order operations.',
        'Implemented digital marketing strategies to improve customer engagement and sales.'
      ]
    },
    {
      id: 3,
      title: 'Youth Volunteer',
      company: 'Cambodia Red Cross',
      period: '2017 - 2019',
      location: 'Serey Sophorn Highschools',
      description: [
        'Gained training in life-saving skills, participated in charity work like blood donation.',
        'Involved in humanitarian and disaster response efforts, including community development projects.'
      ]
    }
  ];

  return (
    <section className="experience">
      <div className="container">
        <div className="experience-header">
          <h1>My <span className="highlight">Experience</span></h1>

          <div className="tab-toggle">
            <button
              className={`tab-btn ${selectedTab === 'resume' ? 'active' : ''}`}
              onClick={() => handleTabChange('resume')}
            >
              <i className="fa-solid fa-file-pdf"></i> Resume
            </button>
            <button
              className={`tab-btn ${selectedTab === 'certification' ? 'active' : ''}`}
              onClick={() => handleTabChange('certification')}
            >
              <i className="fa-solid fa-certificate"></i> Certification
            </button>
          </div>
        </div>

        {selectedTab === 'resume' ? (
          <div className="resume-content">
            <div className="resume-grid">

              {/* Education Column */}
              <div className="resume-column">
                <h2 className="section-title">Education</h2>

                <div className="resume-items">
                  {education.map((edu) => (
                    <div key={edu.id} className="resume-item">
                      <h3>{edu.degree}</h3>
                      <p className="school">{edu.school}</p>
                      <p className="period">{edu.period}</p>
                      <p className="item-description">{edu.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Professional Experience Column */}
              <div className="resume-column">
                <h2 className="section-title">Professional Experience</h2>

                <div className="resume-items">
                  {experience.map((exp) => (
                    <div key={exp.id} className="resume-item">
                      <h3>{exp.title}</h3>
                      <p className="company">{exp.company}</p>
                      {exp.location && <p className="location"><i className="fa-solid fa-location-dot"></i> {exp.location}</p>}
                      <p className="period">{exp.period}</p>
                      <ul className="item-description-list">
                        {exp.description.map((desc, idx) => (
                          <li key={idx}>{desc}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* View Resume Button */}
            <div className="resume-download">
              <a
                href="https://drive.google.com/file/d/16OH5njkKtTB5pwK-Pt-we8FLn5W7zhuK/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="download-btn"
              >
                <i className="fa-solid fa-eye"></i>
                View Full Resume
              </a>
            </div>
          </div>
        ) : (
          <div className="certification-content">
            <h2 className="cert-title">Achievement</h2>
            <p className="cert-subtitle">Certifications</p>

            <div className="certifications-grid">
              {/* Internship: Jumpy Jar */}
              <div className="cert-card">
                <div className="cert-header">
                  <div className="cert-icon">
                    <i className="fa-solid fa-pen-ruler"></i>
                  </div>
                  <span className="cert-badge">Internship</span>
                </div>

                <h3>Professional Designer Internship</h3>

                <p className="cert-course">
                  <i className="fa-solid fa-building"></i>
                  <a href="https://jumpyjar.com.au" target="_blank" rel="noopener noreferrer">
                    Jumpy Jar - Sydney, Australia
                  </a>
                </p>

                <div className="cert-meta">
                  <span className="cert-date">
                    <i className="fa-solid fa-calendar"></i> Jun 2026 - Sep 2026
                  </span>
                  <span className="cert-hours">
                    <i className="fa-solid fa-laptop"></i> Remote
                  </span>
                </div>

                <p className="cert-description">
                  Designed educational resources, printable learning materials, and marketing graphics for early
                  childhood educators, working to brand identity across weekly briefs and design reviews.
                </p>

                <div className="cert-links">
                  <a href="https://drive.google.com/file/d/1KgnRE83PodzR_tK9kckBpZg6_ZL0kUR1/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="cert-link">
                    <i className="fa-solid fa-file-pdf"></i> Completion Letter
                  </a>
                </div>
              </div>

              {/* Certification 1: Cloud Foundations */}
              <div className="cert-card">
                <div className="cert-header">
                  <div className="cert-icon">
                    <i className="fa-solid fa-cloud"></i>
                  </div>
                  <span className="cert-badge">AWS</span>
                </div>

                <h3>AWS Academy Graduate - Cloud Foundations</h3>

                <p className="cert-course">
                  <i className="fa-solid fa-book"></i>
                  ITM 380 001 - Cloud Computing
                </p>

                <div className="cert-meta">
                  <span className="cert-date">
                    <i className="fa-solid fa-calendar"></i> 04/29/2025
                  </span>
                  <span className="cert-hours">
                    <i className="fa-solid fa-clock"></i> 20 hours
                  </span>
                </div>

                <p className="cert-description">
                  Master AWS Cloud Foundations concepts and core services for cloud computing.
                </p>

                <div className="cert-links">
                  <a href="https://drive.google.com/file/d/1cjL2oYQAdE8ypDP_4rOCDb5YIkFXok9e/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="cert-link">
                    <i className="fa-solid fa-file-pdf"></i> View Certificate
                  </a>
                  <a href="https://www.credly.com/go/tGIOOj4F" target="_blank" rel="noopener noreferrer" className="cert-link">
                    <i className="fa-solid fa-award"></i> Credential
                  </a>
                </div>
              </div>

              {/* Certification 2: Cloud Architecting */}
              <div className="cert-card">
                <div className="cert-header">
                  <div className="cert-icon">
                    <i className="fa-solid fa-building"></i>
                  </div>
                  <span className="cert-badge">AWS</span>
                </div>

                <h3>AWS Academy Graduate - Cloud Architecting</h3>

                <p className="cert-course">
                  <i className="fa-solid fa-book"></i>
                  CLD 372 001 - Cloud Solutions Architect
                </p>

                <div className="cert-meta">
                  <span className="cert-date">
                    <i className="fa-solid fa-calendar"></i> 11/24/2025
                  </span>
                  <span className="cert-hours">
                    <i className="fa-solid fa-clock"></i> 60 hours
                  </span>
                </div>

                <p className="cert-description">
                  Design and deploy scalable AWS cloud architecture solutions for enterprise applications.
                </p>

                <div className="cert-links">
                  <a href="https://drive.google.com/file/d/10UXLEbOcJ2D2RV5YChy9Q5GQaY6aq07b/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="cert-link">
                    <i className="fa-solid fa-file-pdf"></i> View Certificate
                  </a>
                  <a href="https://www.credly.com/go/7d27yPiG" target="_blank" rel="noopener noreferrer" className="cert-link">
                    <i className="fa-solid fa-award"></i> Credential
                  </a>
                </div>
              </div>

              {/* Certification 3: Cloud Operations */}
              <div className="cert-card">
                <div className="cert-header">
                  <div className="cert-icon">
                    <i className="fa-solid fa-gears"></i>
                  </div>
                  <span className="cert-badge">AWS</span>
                </div>

                <h3>AWS Academy Graduate - Cloud Operations</h3>

                <p className="cert-course">
                  <i className="fa-solid fa-book"></i>
                  CLD 371 001 - Cloud Operations
                </p>

                <div className="cert-meta">
                  <span className="cert-date">
                    <i className="fa-solid fa-calendar"></i> 10/05/2025
                  </span>
                  <span className="cert-hours">
                    <i className="fa-solid fa-clock"></i> 40 hours
                  </span>
                </div>

                <p className="cert-description">
                  Manage, monitor, and optimize AWS cloud infrastructure and operations.
                </p>

                <div className="cert-links">
                  <a href="https://drive.google.com/file/d/1jSiNky9CdErqyuqC4c0-ogq2vDAF5FSR/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="cert-link">
                    <i className="fa-solid fa-file-pdf"></i> View Certificate
                  </a>
                  <a href="https://www.credly.com/go/myWi9WwR" target="_blank" rel="noopener noreferrer" className="cert-link">
                    <i className="fa-solid fa-award"></i> Credential
                  </a>
                </div>
              </div>

            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Experience;
