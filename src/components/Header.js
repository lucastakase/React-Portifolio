import React, { useState } from 'react';
import { FaCode, FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom'; // Importação do NavLink
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
          <FaCode size={24} />
          <h1>React Portfolio</h1>
        </div>
        <nav className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>
                Projects
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
