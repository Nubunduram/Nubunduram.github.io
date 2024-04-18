import { HashLink as Link } from "react-router-hash-link";
import { useState } from 'react';
import "./_Header.scss";
import DarkModeToggle from './DarkModeToggle/DarkModeToggle';

const Header = () => {
  const [isNavDisplayed, setIsNavDisplayed] = useState(false);

  const toggleNav = () => {
    setIsNavDisplayed(prevState => !prevState);
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
            <li><DarkModeToggle /></li>
          </ul>
        </span>
      </nav>
    </header>
  )
}

export default Header;
