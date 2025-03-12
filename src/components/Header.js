import React, { useState } from 'react';
import { FaCode, FaBars, FaTimes } from 'react-icons/fa'; // Ícones para o título e menu mobile
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <FaCode size={24} /> {/* Ícone ao lado do título */}
          <h1>React Portfolio</h1>
        </div>
        <nav className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="/" className="active">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/projects">Projects</a></li>
          </ul>
        </nav>
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />} {/* Ícone do menu mobile */}
        </div>
      </div>
    </header>
  );
};

export default Header;