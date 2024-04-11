import "./_Footer.scss";
import { HashLink as Link } from 'react-router-hash-link';

const Footer = () => {
  return (
    <footer>
      <nav>
        <span>
          AC
        </span>
        <ul className="nav-list">
          <li><Link to="/#home">Home</Link></li>
          <li><Link to="/#about">About</Link></li>
          <li><Link to="/#projects">Projects</Link></li>
          <li><Link to="/#contact">Contact</Link></li>
        </ul>
        <ul className="social-list">
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
