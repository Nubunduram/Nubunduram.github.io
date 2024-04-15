// Projects.tsx
import React from 'react';
import "./_Projects.scss";
import Project from "./Project/Project";

interface ProjectData {
  title: string;
  details: string;
  stack: string[];
  imageUrl: string;
  link: string;
}

const Projects: React.FC = () => {
  const projectsData: ProjectData[] = [
    {
      title: 'Project Kasa',
      details: 'Kasa Project is a front-end web application developped using Scss & React. The project display accomodations pictures, details, ratings, ... All of it coming from a JSON file.',
      stack: ['React', 'Scss'],
      imageUrl: './assets/kasa.png',
      link: "https://nubunduram.github.io/Kasa/",

    },
    {
      title: 'Architect Portfolio',
      details: 'For this project i had to implement a Login page and an editor mode via modal to connect with the back-end and update the DataBase',
      stack: ['HTML', 'CSS', 'JavaScript'],
      imageUrl: './assets/portfolio-sophie.png',
      link: "https://nubunduram.github.io/Kasa/",

    },
    {
      title: 'Book Rating Site',
      details: 'Creating the server for the website, CRUD, Ratings Logic, Green IT, authentification with JWT & bcrypt, MVC',
      stack: ['Node.js', 'Express', 'MongoDB'],
      imageUrl: './assets/grimoire.png',
      link: "https://nubunduram.github.io/Kasa/",
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-section__title">Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <a key={index} href={project.link} target="_blank" className={index === projectsData.length - 1 ? 'last-project' : ''}>
            <img src={project.imageUrl} alt={`Project ${index + 1}`} />
            <Project project={project} />
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
