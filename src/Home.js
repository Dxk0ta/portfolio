import React from 'react';
import './Home.css';

const Home = () => {
  const handleViewProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="home">
      <img src='./profile.jpg' alt="Dakota Campbell" className="profile-image" />
      <h1>Hi, I'm Dakota</h1>
      <button className="view-projects" onClick={handleViewProjects}>View My Projects</button>
    </div>
  );
};

export default Home;
