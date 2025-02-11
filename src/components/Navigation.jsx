import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="nav">
      <ul>
        <li><Link to="/about-me" className="nav-link">About Me</Link></li>
        <li><Link to="/portfolio" className="nav-link">Portfolio</Link></li>
        <li><Link to="/contact" className="nav-link">Contact</Link></li>
        <li><Link to="/resume" className="nav-link">Resume</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
