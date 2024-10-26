import React from 'react';
import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faPython, faHtml5, faCss3, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
  const skills = [
    { icon: faJs },
    { icon: faPython},
    { icon: faHtml5},
    { icon: faCss3},
    { icon: faReact},
    { icon: faNodeJs}
  ];

  return (
    <div className="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            <FontAwesomeIcon icon={skill.icon} size="2x" />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
