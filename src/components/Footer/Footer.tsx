import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <nav>
        <div>
          <span>
            AC
          </span>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="projects.html">Projects</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <ul>
          <li><a href="https://www.linkedin.com/in/aacaron/"><i className="fa-brands fa-linkedin-in"></i></a></li>
          <li><a href="https://github.com/Nubunduram"><i className="fa-brands fa-github"></i></a></li>
        </ul>
      </nav>
      <p>
        © 2024 Antoine Caron
      </p>
    </footer>
  )
}

export default Footer
