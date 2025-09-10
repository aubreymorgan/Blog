import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
      <nav className="navbar">
        <div className="logo">Aubrey's Blog</div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/newPost">New Post</Link>
          </li>
        </ul>
      </nav>
    );
  }

export default Navbar;