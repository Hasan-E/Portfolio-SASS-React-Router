import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer >
      <div className="icons">
        <a
          target="blank"
          href="https://x.com/i/flow/login"
          className="socialIcon"
        >
          <i>
            <FaSquareXTwitter />
          </i>
        </a>
        <a
          target="blank"
          href="https://www.facebook.com/?locale=tr_TR"
          className="socialIcon"
        >
          <i>
            <FaSquareFacebook />
          </i>
        </a>
        <a
          target="blank"
          href="https://www.instagram.com/"
          className="socialIcon"
        >
          <i>
            <FaSquareInstagram />
          </i>
        </a>
        <a
          target="blank"
          href="https://github.com/Hasan-E"
          className="socialIcon"
        >
          <i>
            <FaGithubSquare />
          </i>
        </a>
      </div>
      <div className="copyRight">
        <p>© Copyright ROOSTER 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
