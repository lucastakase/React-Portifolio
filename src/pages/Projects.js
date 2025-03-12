import React from 'react';
import ProjectCard from '../components/ProjectCard';
import '../App.css';

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'This is a description of project 1.',
      imageUrl: 'https://via.placeholder.com/150',
      projectUrl: '#'
    },
    {
      title: 'Project 2',
      description: 'This is a description of project 2.',
      imageUrl: 'https://via.placeholder.com/150',
      projectUrl: '#'
    },
    {
      title: 'Project 3',
      description: 'This is a description of project 3.',
      imageUrl: 'https://via.placeholder.com/150',
      projectUrl: '#'
    }
  ];

  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;