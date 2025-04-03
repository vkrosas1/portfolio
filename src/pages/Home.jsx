import React from "react";
import TypewriterText from "../components/TypewriterText";
import { UserData } from "../data/UserData";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "../styles/Home.css";
import imagedeveloper from "../assets/images/homeImage.jpg";

function Home() {
  const socialMedia = UserData.socialMedia;

  const socialMediaIcons = {
    AiFillGithub: AiFillGithub,
    FaLinkedinIn: FaLinkedinIn,
    AiFillInstagram: AiFillInstagram,
  };

  return (
    <div className="home-layout">
      <div className="home-layout_content">
        <div className="home-layout_img-container">
          <img className="home-layout_img" src={imagedeveloper} alt="" />
        </div>
        <div className="home-layout_greeting-container">
          <h2 className="home-layout_greeting_content">
            Hello <span className="wave">👋</span>
          </h2>
          <h2 className="home-layout_greeting_content">I'm {UserData.name}</h2>
          <TypewriterText />

          <div className="home-layout_social-media-container">
            {socialMedia.map((data, index) => {
              const IconComponent = socialMediaIcons[data.icon];
              return (
                <button
                  className="home-layout_social-media-button"
                  key={index}
                  onClick={() => window.open(data.url)}
                >
                  <IconComponent className="icon" />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
