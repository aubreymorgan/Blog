import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
      <nav className="navbar">
        <div className="logo">AUBREY'S BLOG</div>
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
      </nav>
    );
  }

export default Navbar;