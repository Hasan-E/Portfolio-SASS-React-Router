import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  const location = useLocation();
  let footerClass = "";
  if (location.pathname === "/") {
    footerClass = "horizontal";
  } else if (
    location.pathname === "/about" ||
    location.pathname === "/projects"
  ) {
    footerClass = "vertical";
  } else {
    footerClass = "middle";
  }
  return (
    <div id="footerDiv" className={footerClass}>
      <div className="icons">
        <a
          target="blank"
          href="https://x.com/i/flow/login"
          className="socialIcon"
        >
          <i className="icon">
            <FaSquareXTwitter />
          </i>
        </a>
        <a
          target="blank"
          href="https://www.facebook.com/?locale=tr_TR"
          className="socialIcon"
        >
          <i className="icon">
            <FaSquareFacebook />
          </i>
        </a>
        <a
          target="blank"
          href="https://www.instagram.com/"
          className="socialIcon"
        >
          <i className="icon">
            <FaSquareInstagram />
          </i>
        </a>
        <a
          target="blank"
          href="https://github.com/Hasan-E"
          className="socialIcon"
        >
          <i className="icon">
            <FaGithubSquare />
          </i>
        </a>
      </div>
      <div className="copyRight">
        <p>© Copyright ROOSTER 2025</p>
      </div>
    </div>
  );
};

export default Footer;
