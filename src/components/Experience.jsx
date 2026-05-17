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
      period: 'Junior Student',
      description: 'Focus on IT system development and web technologies.'
    },
    {
      id: 2,
      degree: 'Bachelor\'s of Computer Science',
      school: 'Fort Hays State University',
      period: 'Junior Student',
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
      title: 'Owner & Operator',
      company: 'Small Business (Online Shop)',
      period: '2022 - 2025',
      description: [
        'Sold skincare products, clothes, and accessories through an online platform.',
        'Implemented marketing strategies to promote products.'
      ]
    },
    {
      id: 2,
      title: 'Culinary & Sales Associate',
      company: 'Empire Pizza',
      period: '2020 - 2023',
      location: 'Banteay Meanchey Province',
      description: [
        'Prepared and cooked menu items while ensuring quality and consistency.',
        'Communicated with customers and suppliers professionally to support smooth operations.'
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
                href="https://drive.google.com/file/d/1bMHEmcvOaCc3rU0KQ6P7F9zlAcgSv1at/view?usp=sharing" 
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
            <h2 className="cert-title"> Archivement</h2>
            <p className="cert-subtitle"> Certifications</p>
            
            <div className="certifications-grid">
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
                  <a href="https://aupp.instructure.com/courses/3650" target="_blank" rel="noopener noreferrer">
                    ITM 380 001 - Cloud Computing
                  </a>
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
                    <i className="fa-solid fa-badge"></i> Credential
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
                  <a href="https://aupp.instructure.com/courses/3930" target="_blank" rel="noopener noreferrer">
                    CLD 372 001 - Cloud Solutions Architect
                  </a>
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
                    <i className="fa-solid fa-badge"></i> Credential
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
                  <a href="https://aupp.instructure.com/courses/3929" target="_blank" rel="noopener noreferrer">
                    CLD 371 001 - Cloud Operations
                  </a>
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
                    <i className="fa-solid fa-badge"></i> Credential
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
