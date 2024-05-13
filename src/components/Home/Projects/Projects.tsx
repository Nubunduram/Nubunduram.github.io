// Projects.tsx
import React from 'react';
import './_Projects.scss';
import Project from './Project/Project';

interface ProjectData {
  title: string;
  details: string;
  stack: string[];
  imageUrlWebP: string;
  imageUrlFallback: string;
  link: string;
}

const Projects: React.FC = () => {
  const projectsData: ProjectData[] = [
    {
      title: 'Project Kasa',
      details:
        'Kasa is a front-end web application developed using Scss & React. The project displays accommodation pictures, details, ratings, ... All of it coming from a JSON file.',
      stack: ['React', 'Sass'],
      imageUrlWebP: './assets/kasa.webp',
      imageUrlFallback: './assets/kasa.jpg',
      link: 'https://nubunduram.github.io/Kasa/',
    },
    {
      title: 'Architect Portfolio',
      details:
        'For this project, I had to implement a Login page and an editor mode via modal to connect with the backend and update the DataBase',
      stack: ['HTML', 'CSS', 'JavaScript'],
      imageUrlWebP: './assets/portfolio-sophie.webp',
      imageUrlFallback: './assets/portfolio-sophie.jpg',
      link: 'https://nubunduram.github.io/portfolio-architecte-sophie-bluel/',
    },
    {
      title: 'Book Rating Site',
      details:
        'Creating the server for the website, CRUD, Ratings Logic, Green IT, authentication with JWT & bcrypt, MVC',
      stack: ['Node.js', 'Express', 'MongoDB'],
      imageUrlWebP: './assets/grimoire.webp',
      imageUrlFallback: './assets/grimoire.jpg',
      link: 'https://nubunduram.github.io/Grimoire/',
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <header>
        <h2 className="projects-section__title">Projects</h2>
      </header>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            className={index === projectsData.length - 1 ? 'last-project' : ''}
          >
            <picture>
              <source srcSet={project.imageUrlWebP} type="image/webp" />
              <img src={project.imageUrlFallback} alt={`Project ${index + 1}`} />
            </picture>
            <Project project={project} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
