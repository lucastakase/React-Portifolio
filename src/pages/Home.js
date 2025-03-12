import React from 'react';
import { FaCode, FaJava, FaReact, FaDatabase, FaTools, FaUsers, FaProjectDiagram, FaMobileAlt } from 'react-icons/fa'; // Ícones para habilidades
import { GiChefToque, GiBrain } from 'react-icons/gi'; // Ícones para experiência
import profilePicture from './ProfilePicture_LucasSasaki.png'; // Importe a imagem
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* intro-container */}
      <div className="intro-container">
        <div className="intro-text">
          <h1>Hello World, I'm Lucas Sasaki</h1>
          <p>
            <strong>Junior Software Developer</strong> with a unique background in <strong>biology</strong>, <strong>culinary arts</strong>, and <strong>event management</strong>. I bring creativity, precision, and problem-solving skills to the world of software development.
          </p>
        </div>
        <div className="home-image">
          <img src={profilePicture} alt="Lucas Sasaki" />
        </div>
      </div>

      <div className="home-content">
        {/* Technical Skills */}
        <div className="section">
          <h2><FaCode /> Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill">
              <p><FaJava /></p>
              <strong>Java</strong>
              <p>Proficient in building server-side applications and games.</p>
            </div>
            <div className="skill">
              <p><FaReact /></p>
              <strong>JavaScript & React</strong>
              <p>Experience in front-end development and REST APIs.</p>
            </div>
            <div className="skill">
              <p><FaDatabase /></p>
              <strong>SQL & Databases</strong>
              <p>Skilled in MySQL and database management.</p>
            </div>
            <div className="skill">
              <p><FaTools /></p>
              <strong>Tools & Platforms</strong>
              <p>OutSystems, Git, IntelliJ, and TomCat.</p>
            </div>
            <div className="skill">
              <p><FaCode /></p>
              <strong>Outsystems</strong>
              <p>Reactive, Mobile, O11</p>
            </div>
            <div className="skill">
              <p><FaUsers /></p>
              <strong>Agile & Teamwork</strong>
              <p>Experienced in SCRUM and cross-functional collaboration.</p>
            </div>
            <div className="skill">
              <p><FaCode /></p>
              <strong>Spring Framework</strong>
              <p>Experience in building RESTful APIs and enterprise applications.</p>
            </div>
            <div className="skill">
              <p><FaCode /></p>
              <strong>Spring Framework</strong>
              <p>Experience in building RESTful APIs and enterprise applications.</p>
            </div>
            <div className="skill">
              <p><FaCode /></p>
              <strong>TypeScript</strong>
              <p>Skilled in building scalable and type-safe applications.</p>
            </div>
          </div>
        </div>

        {/* Professional Experience */}
        <div className="section">
          <h2><GiChefToque /> Professional Experience</h2>
          <div className="experience-grid">
            <div className="experience-item">
              <h3>Cook 1</h3>
              <p>Managed kitchen team operations for 200+ meals daily.</p>
            </div>
            <div className="experience-item">
              <h3>Event Coordinator</h3>
              <p>Organized large-scale events with 40,000+ attendees.</p>
            </div>
            <div className="experience-item">
              <h3>Genetics Intership</h3>
              <p>Biochemistry, Microbiology, Evolutionary Biology</p>
            </div>
          </div>
        </div>
        
        <div className="cta">
          <h2>Let's Build Something Amazing</h2>
          <p>Check out my projects or get in touch to collaborate!</p>
          <a href="/projects" className="cta-button">
            View My Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;