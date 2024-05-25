import "./_Footer.scss";
import { HashLink as Link } from 'react-router-hash-link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { scrollToTop } from "../../utils/scrollToTop";

const darkLogo = "/assets/logo-dark.png";
const lightLogo = "/assets/logo-light.png";


interface DarkModeProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Footer = ({ isDarkMode }: DarkModeProps) => {
  return (
    <footer>
      <nav>
        <img onClick={scrollToTop} alt="logo" className="logo" src={isDarkMode ? darkLogo : lightLogo} />
        <ul className="nav-list">
          <li><Link to="/#home">Home</Link></li>
          <li><Link to="/#about">About</Link></li>
          <li><Link to="/#projects">Projects</Link></li>
          <li><Link to="/#contact">Contact</Link></li>
        </ul>
        <ul className="social-list">
          <li><a aria-label="Antoine Caron LinkedIn" href="https://www.linkedin.com/in/aacaron/"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
          <li><a aria-label="Antoine Caron GitHub" href="https://github.com/Nubunduram"><FontAwesomeIcon icon={faGithub} /></a></li>
        </ul>
      </nav>
      <p>
        © 2024 Antoine Caron
      </p>
    </footer>
  )
}

export default Footer
