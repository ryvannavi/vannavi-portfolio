import React from 'react';
import './Skills.css';

function Skills() {
  const skillCategories = [
    {
      id: 1,
      category: 'Full Stack Development',
      icon: 'fa-code',
      skills: ['HTML, Tailwind CSS, JavaScript', 'Web Development', 'React.js', 'Software Development', 'Cloud Engineering & AWS', 'Backend Tech (basic)']
    },
    {
      id: 2,
      category: 'Tools & Platforms',
      icon: 'fa-tools', 
      skills: ['Microsoft Office', 'Word Document', 'PowerPoint', 'Canvas']
    },
    {
      id: 3,
      category: 'Core Competencies',
      icon: 'fa-lightbulb',
      skills: ['Problem-Solving', 'User Support', 'Technical Support']
    }
  ];

  return (
    <section className="skills">
      <div className="container">
        <div className="skills-header">
          <h1>My <span className="highlight">Skills</span></h1>
          <p className="subtitle">Technical expertise and professional competencies</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={category.id} className="skill-category-box" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="category-header">
                <div className="category-icon">
                  <i className={`fa-solid ${category.icon}`}></i>
                </div>
                <h3>{category.category}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <i className="fa-solid fa-check"></i>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div className="skills-summary">
          <h2>Technical Overview</h2>
          <p>
          Full Stack developer with expertise in front-end technologies (HTML, CSS, JavaScript) and foundational backend skills. Experienced in cloud (AWS), user support, and digital platforms, combining technical skills with problem-solving.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
