import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'The Dice is Right',
    description: 'Multi-Player responsive video game application inspired by a combination of the late Bob Barker’s show, “The Price Is Right” and blackjack.',
    link: 'https://github.com/Dxk0ta/project-1',
  },
  {
    title: 'Soliloquy',
    description: 'Designed a back-end focused application where I configured a user’s blog and the GIPHY API so that they can interact using gifs.',
    link: 'https://github.com/Dxk0ta/project-2',
  },
  {
    title: 'CineSearch',
    description: 'Search application designed for users to look up movies and see more details like the trailer, description, etc.',
    link: 'https://github.com/Dxk0ta/p3-client',
  },
  {
    title: 'Bloom',
    description: 'Garden app designed for keeping track of specific plants in your garden, details of the plants, and reminders of when to feed/water the plants.',
    link: 'https://github.com/Dxk0ta/project-4',
  },
];

const Projects = () => {
  return (
    <div id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="grid">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <h3>{project.title}</h3>
            <p className='project-description'>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
