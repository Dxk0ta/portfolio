import React from 'react';
import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faPython, faHtml5, faCss3, faReact, faNodeJs, faVuejs, faSass } from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
  const skills = [
    { name: "JavaScript", icon: faJs },
    { name: "Python", icon: faPython },
    { name: "HTML5", icon: faHtml5 },
    { name: "CSS3", icon: faCss3 },
    { name: "React", icon: faReact },
    { name: "Node.js", icon: faNodeJs },
    { name: "Vue.js", icon: faVuejs },
    { name: "SASS", icon: faSass },
  ];

  return (
    <div className="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            <FontAwesomeIcon icon={skill.icon} size="2x" />
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

