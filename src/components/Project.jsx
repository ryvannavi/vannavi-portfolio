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
      image: '🌸',
      technologies: ['React', 'JavaScript', 'React Router', 'Bootstrap', 'API'],
      featured: true,
      githubLink: 'https://github.com/ryvannavi/TryToStaySane',
      class: 'INF_651 Front-End Development'
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
            <a 
              key={project.id}
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`project-card ${project.featured ? 'featured' : ''}`}
            >
              {/* Featured Badge */}
              {project.featured && <span className="featured-badge">Featured</span>}

              {/* Project Image */}
              <div className="project-image">
                {project.image}
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

                {/* View Button */}
                <button className="view-btn">
                  <i className="fa-brands fa-github"></i>
                  View Code
                </button>
              </div>
            </a>
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
