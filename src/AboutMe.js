import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div id="aboutme" className="aboutme">
      <h2 className="aboutme-title">About Me</h2>
      <p className="aboutme-description">
        I'm Dakota, a full-stack software developer from <strong>Los Angeles, CA</strong>.
      </p>
      <p className="aboutme-description">
        I combine my technical skills with <strong>seven years of experience in healthcare</strong> to deliver great attention to detail and user-focused solutions.
      </p>
      <p className="aboutme-quote">
      “Empathy in action: transforming ideas into impactful solutions.”
      </p>
    </div>
  );
};

export default AboutMe;
