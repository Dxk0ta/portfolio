import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <nav className="nav">
      <button onClick={() => window.scrollTo(0, document.getElementById('home').offsetTop)}>Home</button>
      <button onClick={() => window.scrollTo(0, document.getElementById('skills').offsetTop)}>Skills</button>
      <button onClick={() => window.scrollTo(0, document.getElementById('projects').offsetTop)}>Projects</button>
      <button onClick={() => window.scrollTo(0, document.getElementById('contact').offsetTop)}>Contact</button>
    </nav>
  );
};

export default Header;
