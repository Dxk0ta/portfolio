import React from 'react';
import './AboutMe.css';
import aboutPicture from '../src/Assets/aboutpicture.jpg'; 
import picOne from '../src/Assets/pic1.jpg'
import picTwo from '../src/Assets/pic2.jpg'
import picThree from '../src/Assets/pic3.jpg'
import picFour from '../src/Assets/pic4.jpg'
import picFive from '../src/Assets/pic5.jpg'

const AboutMe = () => {
  return (
    <div id="aboutme" className="aboutme">
      <div className="aboutme-content">
        <div className="aboutme-text">
          <h2 className="aboutme-title">about.</h2>
          <p className="aboutme-description">
            Software Developer from  <strong>Los Angeles, California</strong>.
          </p>
          <p className="aboutme-description">
          Hi, I'm Dakota Campbell, a passionate Full Stack Software Developer with a love for creating visually stunning and user-friendly applications. My favorite part of development lies in front-end design, where I transform ideas into beautiful, interactive experiences. Outside of coding, I cherish time with my wife and animals, and I thrive on collaboration, hard work, and strong ethics both on and off the screen. Whether I'm tackling a challenging project or cheering on my favorite sports teams, I bring enthusiasm, dedication, and a genuine love for problem-solving to everything I do.
          </p>
        </div>
        <div className="aboutme-image">
          <img src={aboutPicture} alt="Profile" />
        </div>
      </div>
      <div className="aboutme-gallery">
        {/* Replace these with actual images or import them as needed */}
        <img src={picOne} alt="Gallery item 1" />
        <img src={picTwo} alt="Gallery item 2" />
        <img src={picThree} alt="Gallery item 3" />
        <img src={picFour} alt="Gallery item 4" />
        <img src={picFive} alt="Gallery item 5" />
      </div>
    </div>

  );
};

export default AboutMe;