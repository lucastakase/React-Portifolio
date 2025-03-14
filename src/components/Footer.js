import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Importando ícones do LinkedIn e GitHub
import './Footer.css';

const Footer = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/lucastakase/',
      icon: <FaLinkedin />,
    },
    {
      name: 'GitHub',
      url: 'https://github.com/lucastakase',
      icon: <FaGithub />,
    },
  ];

  return (
    <footer className="footer">
      

      <div className="social-links">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            {link.icon}
            <span>{link.name}</span>
          </a>
        ))}
      </div>

      <p>lucastakase@gmai.com || +351 924 714 460</p>
      <p>&copy; 2025 React Portfolio Showcase. All rights reserved.</p>
    </footer>
  );
};

export default Footer;