import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="https://filecoin.io/vintage/images/blog/hfs-eduvault.png" alt="EduVault Logo" className="logo-img" />
        <h1 className="logo-text">EduVault</h1>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/upload">Upload</Link></li>
        <li><Link to="/about">About</Link></li>
        <Link to="/notes">Notes</Link>

      </ul>
    </nav>
  );
}

export default Navbar;