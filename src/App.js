import React from 'react';
import './App.css';
import Home from './Home';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

const App = () => {
  return (
    <div>
      <Home />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;
