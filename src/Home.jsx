// Home.js
import React from 'react';
import './Home.css';
import profilePicture from '../src/Assets/pp.png';

const Home = () => {
  const handleViewAboutMe = () => {
    document.getElementById('aboutme').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="home">
      <img src={profilePicture} alt="Dakota Campbell" className="profile-image" />
      <h1>
        Hello, I'm <span className="name">Dakota</span>.
      </h1>
      <p>A Fullstack Software Engineer.</p>
      <button className="button" onClick={handleViewAboutMe}>Let's Get Started!</button>
    </div>
  );
};

export default Home;
