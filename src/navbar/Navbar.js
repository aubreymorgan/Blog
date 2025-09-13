import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
      <nav className="navbar">
        <a 
          href="https://www.linkedin.com/in/aubrey-morgan-b58b7b250/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <i className="icons fa-brands fa-square-linkedin"></i>
        </a>
        <a 
          href="https://github.com/aubreymorgan" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <i className="icons fa-brands fa-square-github"></i>
        </a>
        <ul className="nav-links">
          <li>
            <Link to="/">(HOME)</Link>
          </li>
          <li>
            <Link to="/blog">(BLOG)</Link>
          </li>
          <li>
            <Link to="/newPost">(NEW POST)</Link>
          </li>
        </ul>
        <i className="searchIcon fa-solid fa-magnifying-glass"></i>

      </nav>
    );
  }

export default Navbar;