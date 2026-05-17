import React from 'react';
import './Certification.css';

function Certification() {
  const certifications = [
    {
      id: 1,
      title: 'Certification Title',
      issuer: 'Issuing Organization',
      date: 'Month Year',
      description: 'Add your certification details here'
    }
  ];

  return (
    <section className="certification">
      <div className="container">
        <div className="certification-header">
          <h1>My <span className="highlight">Certifications</span></h1>
          <p className="subtitle">Professional credentials and achievements</p>
        </div>

        <div className="certifications-grid">
          {certifications.map((cert) => (
            <div key={cert.id} className="cert-card">
              <div className="cert-icon">
                <i className="fa-solid fa-certificate"></i>
              </div>
              <h3>{cert.title}</h3>
              <p className="issuer">{cert.issuer}</p>
              <p className="date">
                <i className="fa-solid fa-calendar"></i> {cert.date}
              </p>
              <p className="description">{cert.description}</p>
            </div>
          ))}
        </div>

        <div className="empty-state">
          <p>Add your certifications to showcase your professional achievements</p>
        </div>
      </div>
    </section>
  );
}

export default Certification;
