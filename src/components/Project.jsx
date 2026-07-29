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
      liveLink: 'https://trytostaysame33.netlify.app',
      class: 'INF_651 Front-End Development'
    },
    {
      id: 2,
      title: 'NovaSupport',
      subtitle: 'AI-Powered Helpdesk & Support System',
      year: 'Jun 2026',
      category: 'fullstack',
      description: 'Full-stack helpdesk platform built with Laravel 11 and Groq AI. Customers submit tickets through a public support center, and Groq drafts a suggested reply that an admin reviews, edits, and approves before it sends — keeping a human in the loop rather than letting the AI answer unsupervised. Includes role-based authentication for admin and customer accounts, ticket status and priority tracking, real-time notifications, an analytics dashboard for response times and ticket volume, and a searchable knowledge base of six documentation categories that deflects repeat questions before they become tickets.',
      icon: 'fa-solid fa-headset',
      technologies: ['Laravel 11', 'PHP', 'SQLite', 'Tailwind CSS', 'Groq AI', 'AlpineJS'],
      featured: false,
      githubLink: 'https://github.com/ryvannavi/novasupport',
      liveLink: 'https://novasupport-sg.onrender.com',
      class: 'FYP 401 001 - Final Year Project - I',
      demo: {
        note: 'Hosted on a free tier, so the first load can take up to a minute while the server wakes up. You can also register a new account on either side to test the full sign-up flow.',
        accounts: [
          { role: 'Admin', email: 'mollyadm@gmail.com', password: '12345678' },
          { role: 'Customer', email: 'bobo@gmail.com', password: '12345678' }
        ]
      }
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
                <i className={project.icon}></i>
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

                {/* Demo Credentials */}
                {project.demo && (
                  <div className="project-demo">
                    <p className="demo-title">
                      <i className="fa-solid fa-key"></i> Test accounts
                    </p>

                    <div className="demo-accounts">
                      {project.demo.accounts.map((account, idx) => (
                        <div key={idx} className="demo-account">
                          <span className="demo-role">{account.role}</span>
                          <div className="demo-fields">
                            <code>{account.email}</code>
                            <code>{account.password}</code>
                          </div>
                        </div>
                      ))}
                    </div>

                    <p className="demo-note">{project.demo.note}</p>
                  </div>
                )}

                {/* Technologies */}
                <div className="technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>

                {/* Links */}
                <div className="project-links">
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
                      className="view-btn outline"
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
