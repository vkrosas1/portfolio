import React from "react";
import { UserData } from "../data/UserData";
// import Marquee from "react-fast-marquee";
import { skillsData } from "../data/SkillsData";
import { skillsImage } from "../utils/SkillsToImage";
import AboutImage from "../assets/images/AboutImage.jpeg";
import ProjectCards from "../components/ProjectCards";
import "../styles/About.css";

function About() {
  const { about } = UserData;
  return (
    <div className="about-container" tabIndex="0">
      <div className="about-container_layout">
        <div className="about-container_text">
          <p className="about_text-header">About Me</p>
          <p className="about_text-description">{about}</p>
        </div>
        <div className="about-container_img" tabIndex="0">
          <img className="about_img" src={AboutImage} alt="Profile picture" />
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
        <ProjectCards />
      </div>
    </div>
  );
}

export default About;
