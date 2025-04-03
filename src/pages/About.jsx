import React from "react";
import { UserData } from "../data/UserData";
// import Marquee from "react-fast-marquee";
import { skillsData } from "../data/SkillsData";
import { skillsImage } from "../utils/SkillsToImage";
import AboutImage from "../assets/images/AboutImage.jpeg";
import "../styles/About.css";

function About() {
  const { about } = UserData;
  return (
    <div className="about-container">
      <div className="about-container_layout">
        <div className="about-container_text">
          <p className="about_text-header">About Me</p>
          <p className="about_text-description">{about}</p>
        </div>
        <div className="about-container_img">
          <img className="about_img" src={AboutImage} alt="" />
        </div>
        <div className="about_skills">
          {skillsData.map((skill, id) => (
            <div className="about_skills-container" key={id}>
              <img
                className="about_skills-img"
                src={skillsImage(skill)}
                alt={skill}
              />
              <p>{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
