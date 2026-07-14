import React from 'react';
import './Project.css';
function Project() {
  const projects = [
    {
      id: 1,
      title: 'TryToStaySane <33',
      subtitle: 'Perfume E-Commerce Platform',
      year: 'Apr 2026',
      category: 'ecommerce',
      description: 'Interactive perfume e-commerce website built with React. Features user authentication, shopping cart, and API integration with Mockoon.',
      icon: 'fa-solid fa-cart-shopping',
      technologies: ['React', 'JavaScript', 'React Router', 'Bootstrap', 'API'],
      featured: true,
      githubLink: 'https://github.com/ryvannavi/TryToStaySane',
      liveLink: 'https://try-to-stay-sane.vercel.app/',
      class: 'INF_651 Front-End Development'
    },
    {
      id: 2,
      title: 'NovaSupport',
      subtitle: 'AI-Powered Helpdesk & Support System',
      year: 'Jun 2026',
      category: 'fullstack',
      description: 'Full-stack customer support system built with Laravel 11 and Groq AI. Features AI-generated replies with admin approval workflow, real-time notifications, analytics dashboard, and FAQ knowledge base.',
      icon: 'fa-solid fa-headset',
      technologies: ['Laravel', 'PHP', 'SQLite', 'Tailwind CSS', 'Groq AI', 'AlpineJS'],
      featured: false,
      githubLink: 'https://github.com/ryvannavi/novasupport',
      liveLink: 'https://novasupport-sg.onrender.com/',
      class: 'FYP 401 001 - Final Year Project - I'
    }
  ];
  return (
    <section className="project">
      <div className="container">
        <div className="project-header">
          <h1>My <span className="highlight">Projects</span></h1>
          <p className="subtitle">Showcasing my work and accomplishments</p>
        </div>
        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project) => (
            <div 
              key={project.id}
              className={`project-card ${project.featured ? 'featured' : ''}`}
            >
              {/* Featured Badge */}
              {project.featured && <span className="featured-badge">Featured</span>}
              {/* Project Image */}
              <div className="project-image">
                <i className={project.icon} style={{ fontSize: '2.5rem', color: '#a85a3a' }}></i>
              </div>
              {/* Project Content */}
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-subtitle-text">{project.subtitle}</p>
                
                {project.class && (
                  <p className="project-class">
                    <i className="fa-solid fa-book"></i> {project.class}
                  </p>
                )}
                
                <p className="project-year">
                  <i className="fa-solid fa-calendar"></i> {project.year}
                </p>
                <p className="project-description">
                  {project.description}
                </p>
                {/* Technologies */}
                <div className="technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
                {/* Buttons */}
                <div className="project-buttons">
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="view-btn"
                  >
                    <i className="fa-brands fa-github"></i>
                    View Code
                  </a>
                  {project.liveLink && (
                    <a 
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="live-btn"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* View All Projects Link */}
        <div className="view-all-projects">
          <a href="https://github.com/ryvannavi" target="_blank" rel="noopener noreferrer" className="github-link">
            <i className="fa-solid fa-code-branch"></i>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
export default Project;
