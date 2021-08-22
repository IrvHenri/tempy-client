import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <span className="footer-logo">
        <img src="/images/white_logo_transparent_background.png" alt="logo" />
        <p>By Irving Henriquez</p>
      </span>
      <div className="footer-socials">
        <a href="https://github.com/IrvHenri" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/irving-henriquez/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
