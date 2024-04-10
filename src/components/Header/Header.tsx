import { useState } from 'react';
import { HashLink as Link } from "react-router-hash-link";
import "./_Header.scss";

const Header = () => {
  const [isNavDisplayed, setIsNavDisplayed] = useState(false);

  const toggleNav = () => {
    setIsNavDisplayed(prevState => !prevState);
  };

  return (
    <header className="general-header">
      <nav>
        <span>AC</span>
        <span className="navigation">
          <button id="burger-button" className="burger-button" onClick={toggleNav}>
            <i className="fa-solid fa-bars"></i>
          </button>
          <ul id="nav-list" className={isNavDisplayed ? "displayed" : ""}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/#about">About</Link></li>
            <li><Link to="/#projects">Projects</Link></li>
            <li><Link to="/#contact">Contact</Link></li>
            <li><button id="toggle-dark-mode"><i className="fa-solid fa-lightbulb"></i></button></li>
          </ul>
        </span>
      </nav>
    </header>
  )
}

export default Header
