import React from "react";
import { UserData } from "../data/UserData";
import "../styles/Footer.css";

function Footer() {
  const { FooterLink } = UserData;

  return (
    <div className="footer-container">
      <div className="footer-container_text">Designed & Built by</div>
      <div
        className="footer-container_text-link"
        onClick={() => {
          window.open(FooterLink);
        }}
      >
        vivianarosas
      </div>
    </div>
  );
}

export default Footer;
