import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
      <nav className="navbar">
        <i className="icons fa-brands fa-square-linkedin"></i>
        <i className="icons fa-brands fa-square-github"></i>
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