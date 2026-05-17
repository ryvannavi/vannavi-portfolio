import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {currentYear} <span className="highlight">Vannavi Ry</span>. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
