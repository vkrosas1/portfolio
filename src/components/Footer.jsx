import React from "react";
import { UserData } from "../data/UserData";
import "../styles/Footer.css";

function Footer() {
  const { FooterLink } = UserData;

  return (
    <div className="footer-container">
      <div className="footer-container_text">Designed & Built by</div>
      <a className="footer-container_text-link" href={FooterLink}>
        vivianarosas
      </a>
    </div>
  );
}

export default Footer;
