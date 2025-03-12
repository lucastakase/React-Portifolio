import React from 'react';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';
import { FaReact, FaNodeJs, FaJava, FaDatabase, FaCode, FaHtml5, FaCss3, FaGit, FaBootstrap, FaLaptopCode, FaShoppingCart, FaHotel, FaComments, FaHandsHelping, FaGamepad, FaChartLine, FaUtensils, FaPaintBrush } from 'react-icons/fa';
import { SiMysql, SiSpring, SiApachetomcat, SiTypescript, SiPostgresql, SiJavascript } from 'react-icons/si';

const Projects = () => {
  // Lista de projetos
  const projects = [
    {
      title: 'React Portfolio',
      description: 'React.js project to showcase personal projects, skills, and information about the developer.',
      icon: <FaLaptopCode size={64} />, // Ícone para React Portfolio
      projectUrl: 'https://github.com/lucastakase/React-Portifolio',
      technologies: [FaReact, FaNodeJs, SiJavascript, FaHtml5, FaCss3]
    },
    {
      title: 'E-Commerce Mobile App',
      description: 'A mobile e-commerce app with a web platform for product and order management made with Outsystems.',
      icon: <FaShoppingCart size={64} />, // Ícone para E-Commerce
      projectUrl: 'https://github.com/lucastakase/Mobile_API_Outsystems',
      technologies: [SiJavascript, FaHtml5, FaCss3]
    },
    {
      title: 'Hotel Booking Management',
      description: 'A Reactive Project in Outsystems to manage a Hotel Booking.',
      icon: <FaHotel size={64} />, // Ícone para Hotel Booking
      projectUrl: 'https://github.com/lucastakase/Booking_Outsystems',
      technologies: [SiJavascript, FaHtml5, FaCss3]
    },
    {
      title: 'Java Chat Application',
      description: 'A chat server and client application supporting multiple users with custom usernames.',
      icon: <FaComments size={64} />, // Ícone para Chat Application
      projectUrl: 'https://github.com/lucastakase/Chat2.0',
      technologies: [FaJava, FaGit]
    },
    {
      title: 'HelpHub Volunteer Platform',
      description: 'A platform to connect individuals in need with volunteers.',
      icon: <FaHandsHelping size={64} />, // Ícone para HelpHub
      projectUrl: 'https://github.com/lucastakase/HelpHub',
      technologies: [FaJava, SiApachetomcat, SiSpring, SiMysql, SiJavascript, FaHtml5, FaCss3, FaGit, FaBootstrap]
    },
    {
      title: 'CtrlFight: Java Fighting Game',
      description: 'A 2D fighting game with custom sounds and a menu interface.',
      icon: <FaGamepad size={64} />, // Ícone para CtrlFight
      projectUrl: 'https://github.com/lucastakase/FirstGameJamCntrFight',
      technologies: [FaJava, FaGit]
    },
    {
      title: 'Sales Dashboard - First React',
      description: 'A React.js project that fetches sales data from an API and displays it as a dynamic chart.',
      icon: <FaChartLine size={64} />, // Ícone para Sales Dashboard
      projectUrl: 'https://github.com/lucastakase/first-react-project',
      technologies: [FaReact, FaNodeJs, SiJavascript, FaHtml5, FaCss3]
    },
    {
      title: 'Portuguese Dishes List',
      description: 'It provides functionalities such as adding dishes, displaying dishes (all, eaten, or not eaten), ranking dishes, and deleting dishes or their ranks.',
      icon: <FaUtensils size={64} />, // Ícone para Portuguese Dishes
      projectUrl: 'https://github.com/lucastakase/PortugueseDishes',
      technologies: [FaJava, SiMysql, FaGit]
    },
    {
      title: 'SimplePainter Application',
      description: 'A basic painting application allowing users to draw on a grid and save/load paintings.',
      icon: <FaPaintBrush size={64} />, // Ícone para SimplePainter
      projectUrl: 'https://github.com/lucastakase/SimplePainter',
      technologies: [FaJava, FaGit]
    }
  ];

  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            icon={project.icon} // Passando o ícone como prop
            projectUrl={project.projectUrl}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;