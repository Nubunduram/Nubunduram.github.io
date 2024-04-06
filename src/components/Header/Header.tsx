import { Link } from "react-router-dom"
import "./_Header.scss";

const Header = () => {
  return (
    <header className="general-header">
      <nav>
        <span>AC</span>
        <span className="navigation">
          <button id="burger-button" className="burger-button"><i className="fa-solid fa-bars"></i></button>
          <ul id="nav-list">
            <li><Link to="/">Home</Link></li>
            <li><a href="/#projects">Projects</a></li>
            <li><Link to="/about">About</Link></li>
            <li><a href="/#contact">Contact</a></li>
            <li><button id="toggle-dark-mode"><i className="fa-solid fa-lightbulb"></i></button></li>
          </ul>
        </span>
      </nav>
    </header>
  )
}

export default Header
