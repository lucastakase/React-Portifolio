import React from 'react';
import '../App.css';

const About = () => {
  return (
    <div className="about">
      <h2>About Me</h2>
      <section>
        <p>
          🧬 <strong>Scientist at Heart, Problem-Solver in Tech</strong><br />
          My journey started in genetics and microbiology, where I developed analytical thinking, data analysis, and problem-solving skills. Researching complex systems gave me a structured approach to breaking down challenges—something that now fuels my passion for software development.
        </p>
      </section>

      <section>
        <p>
          🔪 <strong>Precision in the Kitchen, Efficiency in Code</strong><br />
          Working in high-energy kitchens sharpened my ability to manage workflows, optimize processes, and collaborate in fast-paced environments. Creativity, precision, and adaptability became second nature—skills that seamlessly translate into tech.
        </p>
      </section>

      <section>
        <p>
          💻 <strong>Building in the Digital World</strong><br />
          Now, I apply my diverse background to software development, focusing on fullstack applications, automation, and scalable solutions. My technical expertise includes:
        </p>
        <ul>
          <li><strong>Programming Languages:</strong> JavaScript, Java</li>
          <li><strong>Frontend Development:</strong> React, HTML, CSS, TypeScript</li>
          <li><strong>Backend Development:</strong> Node.js, MySQL, SQL, PostgreSQL</li>
          <li><strong>Low-Code Platforms:</strong> OutSystems for rapid application development</li>
          <li><strong>Version Control & Collaboration:</strong> Git, GitHub, Agile methodologies</li>
          <li><strong>Software Development Principles:</strong> Data Structures & Algorithms, RESTful APIs, OOP, Unit Testing</li>
          <li><strong>Cloud & DevOps:</strong> Docker, CI/CD, AWS (basics)</li>
        </ul>
      </section>

      <section>
        <p>
          🚀 I’m currently working on real-world projects, contributing to open-source initiatives, and refining my problem-solving skills through coding challenges.
        </p>
        <p>
          I’m eager to collaborate, learn, and contribute. Whether you’re looking for a passionate junior developer or want to discuss tech, feel free to reach out!
        </p>
      </section>
    </div>
  );
};

export default About;