import React from 'react';
import './Skills.css';

function Skills() {
  const skillCategories = [
    {
      id: 1,
      category: 'Full Stack Development',
      icon: 'fa-code',
      skills: [
        'HTML, Tailwind CSS, JavaScript',
        'React.js',
        'Web Development',
        'Software Development',
        'Cloud Engineering & AWS',
        'Backend Tech'
      ]
    },
    {
      id: 2,
      category: 'Design & Creative',
      icon: 'fa-pen-ruler',
      skills: [
        'Adobe Illustrator',
        'Canva',
        'Graphic & Visual Design',
        'Typography & Color Theory',
        'Print-Ready Layout',
        'Brand Identity'
      ]
    },
    {
      id: 3,
      category: 'Tools & Platforms',
      icon: 'fa-toolbox',
      skills: [
        'Git & GitHub',
        'Netlify',
        'Microsoft Office',
        'PowerPoint'
      ]
    },
    {
      id: 4,
      category: 'Core Competencies',
      icon: 'fa-lightbulb',
      skills: [
        'Problem-Solving',
        'User Support',
        'Technical Support',
        'Remote Collaboration'
      ]
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
            Full-stack developer with expertise in front-end technologies (HTML, CSS, JavaScript, React.js,
            Tailwind CSS) and foundational backend skills (Node.js, Laravel, Groq AI, AWS). Alongside development,
            I completed a professional design internship at Jumpy Jar, producing print-ready educational materials
            and brand-aligned marketing graphics in Adobe Illustrator and Canva. That combination means I can take
            a product from visual concept through to working interface, with equal attention to layout, typography,
            and maintainable code.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
