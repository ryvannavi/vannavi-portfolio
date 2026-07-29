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
      description: 'A front-end storefront for a curated perfume catalogue, built in React with client-side routing and a mock REST API.',
      features: [
        'Product catalogue with search and category filtering',
        'User registration and login flow',
        'Persistent shopping cart and checkout',
        'Mockoon mock API for product and order data'
      ],
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
      description: 'A customer support platform where Groq AI drafts ticket replies for an admin to review and approve before they send.',
      features: [
        'AI-drafted replies with admin approval workflow',
        'Role-based access for admins and customers',
        'Analytics dashboard for volume and response times',
        'Searchable FAQ knowledge base across six categories'
      ],
      icon: 'fa-solid fa-headset',
      technologies: ['Laravel 11', 'PHP', 'SQLite', 'Tailwind CSS', 'Groq AI', 'AlpineJS'],
      featured: false,
      githubLink: 'https://github.com/ryvannavi/novasupport',
      liveLink: 'https://novasupport-sg.onrender.com',
      class: 'FYP 401 001 - Final Year Project - I',
      demo: {
        note: 'First load may take a minute while the free-tier server wakes up.',
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

                <div className="project-meta">
                  {project.class && (
                    <span className="project-class">
                      <i className="fa-solid fa-book"></i> {project.class}
                    </span>
                  )}
                  <span className="project-year">
                    <i className="fa-solid fa-calendar"></i> {project.year}
                  </span>
                </div>

                <p className="project-description">
                  {project.description}
                </p>

                {/* Key Features */}
                {project.features && (
                  <ul className="project-features">
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                )}

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
                          <code>{account.email}</code>
                          <code>{account.password}</code>
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
