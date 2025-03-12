import React, { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa';
import './FloatingContact.css';

const FloatingContact = () => {
  const [showPhoneNumber, setShowPhoneNumber] = useState(false); // Estado para controlar a visibilidade do número

  const handlePhoneClick = () => {
    setShowPhoneNumber(!showPhoneNumber); // Alterna a visibilidade do número
  };

  return (
    <div className="floating-contact">
      {/* Link para o e-mail */}
      <a href="mailto:lucastakase@gmail.com" target="_blank" rel="noopener noreferrer">
        <FaEnvelope size={24} />
      </a>

      {/* Link para o LinkedIn */}
      <a href="https://www.linkedin.com/in/lucastakase" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={24} />
      </a>

      {/* Link para o GitHub */}
      <a href="https://github.com/lucastakase" target="_blank" rel="noopener noreferrer">
        <FaGithub size={24} />
      </a>

      {/* Ícone de telefone com funcionalidade de clique */}
      <div className="phone-icon" onClick={handlePhoneClick}>
        <FaPhone size={24} />
        {showPhoneNumber && ( // Exibe o número se showPhoneNumber for true
          <span className="phone-number">+351 924 714 460</span>
        )}
      </div>
    </div>
  );
};

export default FloatingContact;