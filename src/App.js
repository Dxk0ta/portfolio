import React from 'react';
import './App.css';
import Home from './Home';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import AboutMe from './AboutMe';

const App = () => {
  return (
    <div>
      <Home />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;
