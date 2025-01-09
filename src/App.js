import React, { useState, useEffect, useRef } from "react";
import './App.css';
import Home from './Home';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import AboutMe from './AboutMe';

const App = () => {
  const [showNav, setShowNav] = useState(false);
  const homeRef = useRef(null);
  const aboutMeRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  // Function to smoothly scroll to each section
  const scrollToSection = (sectionRef) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (aboutMeRef.current) {
        const sectionTop = aboutMeRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Show the navbar when the "About Me" section comes into view
        if (sectionTop <= windowHeight / 2) {
          setShowNav(true);
        } else {
          setShowNav(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Navbar that only shows after scrolling to the About Me section */}
      <nav className={`navbar ${showNav ? "show" : ""}`}>
        <button onClick={() => scrollToSection(homeRef)}>Home</button>
        <button onClick={() => scrollToSection(aboutMeRef)}>About Me</button>
        <button onClick={() => scrollToSection(projectsRef)}>Projects</button>
        <button onClick={() => scrollToSection(skillsRef)}>Skills</button>
        <button onClick={() => scrollToSection(contactRef)}>Contact</button>
      </nav>

      {/* Main content sections with references */}
      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={aboutMeRef}>
        <AboutMe />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
};

export default App;
