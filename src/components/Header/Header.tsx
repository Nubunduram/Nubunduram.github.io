import { HashLink as Link } from "react-router-hash-link";
import { useState } from 'react';
import "./_Header.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import lightLogo from "/assets/logo-light.png";
import darkLogo from "/assets/logo-dark.png";
import DarkModeToggle from './DarkModeToggle/DarkModeToggle';
import { scrollToTop } from "../../utils/scrollToTop";


interface DarkModeProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header = ({ isDarkMode, toggleDarkMode }: DarkModeProps) => {

  const [isNavDisplayed, setIsNavDisplayed] = useState(false);

  const toggleNav = () => {
    setIsNavDisplayed(prevState => !prevState);
  };

  return (
    <header className="general-header" id="general-header">
      <nav>
        <img onClick={scrollToTop} alt="logo" className="logo" src={isDarkMode ? darkLogo : lightLogo} />
        <span className="navigation">
          <button aria-label="Link Menu" id="burger-button" className="burger-button" onClick={toggleNav}>
            <FontAwesomeIcon icon={faBars} />
          </button>
          <ul id="nav-list" className={isNavDisplayed ? "displayed" : ""}>
            <li><Link to="/#home">Home</Link></li>
            <li><Link to="/#about">About</Link></li>
            <li><Link to="/#projects">Projects</Link></li>
            <li><Link to="/#contact">Contact</Link></li>
            <li>
              <DarkModeToggle toggleDarkMode={toggleDarkMode} />
            </li>
          </ul>
        </span>
      </nav>
    </header>
  );
}

export default Header;
