import "./_Projects.scss";
import Project from "./Project/Project";

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-section__title">Projects</h2>
      <div className="projects-grid">
        <a href="#" target="_blank">
          <img src="../../src/assets/homeHeader.jpg" />
          <Project />
        </a>
        <a href="#" target="_blank">
          <img src="../../src/assets/homeHeader.jpg" />
          <Project />
        </a>
        <a href="#" className="last" target="_blank">
          <img src="../../src/assets/homeHeader.jpg" />
          <Project />
        </a>
      </div>
    </section>
  )
}

export default Projects
