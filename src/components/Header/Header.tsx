import { useState } from 'react';
import { HashLink as Link } from "react-router-hash-link";
import "./_Header.scss";

const Header = () => {
  const [isNavDisplayed, setIsNavDisplayed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleNav = () => {
    setIsNavDisplayed(prevState => !prevState);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(prevState => !prevState);
    const element = document.body || document.documentElement;
    if (isDarkMode) {
      element.classList.remove('dark');
    } else {
      element.classList.add('dark');
    }
  };

  return (
    <header className="general-header" id="general-header">
      <nav>
        <span className='logo'>AC</span>
        <span className="navigation">
          <button id="burger-button" className="burger-button" onClick={toggleNav}>
            <i className="fa-solid fa-bars"></i>
          </button>
          <ul id="nav-list" className={isNavDisplayed ? "displayed" : ""}>
            <li><Link to="/#home">Home</Link></li>
            <li><Link to="/#about">About</Link></li>
            <li><Link to="/#projects">Projects</Link></li>
            <li><Link to="/#contact">Contact</Link></li>
            <li><button id="toggle-dark-mode" onClick={toggleDarkMode}><i className="fa-solid fa-lightbulb"></i></button></li>
          </ul>
        </span>
      </nav>
    </header>
  )
}

export default Header;
