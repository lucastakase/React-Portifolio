import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, description, icon, projectUrl, technologies }) => {
  return (
    <div className="project-card">
      <div className="project-icon">
        {icon} {/* Renderizando o ícone */}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="technologies">
        {technologies.map((Icon, index) => (
          <span key={index} className="technology-icon">
            <Icon />
          </span>
        ))}
      </div>
      <a href={projectUrl} target="_blank" rel="noopener noreferrer">View Project</a>
    </div>
  );
};

export default ProjectCard;