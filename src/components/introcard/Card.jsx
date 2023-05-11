import React from "react";
import "./card.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
const Card = () => {
  return (
    <div className="card">
      <div className="card__info">
        <div className="title">Hello</div>
        <div className="title">I'm Satya Prakash </div>

        <div className="card__type">Full Stack Web Developer</div>
        <div className="socials">
          <a href="https://github.com/Satya32-gif" target="_blank">
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/satya-prakash-nayak-b40346249/ "
            target="_blank"
          >
            <LinkedInIcon />
          </a>
          <a href="https://twitter.com/iAmsatyaPN" target="_blank">
            <TwitterIcon />
          </a>
          <a href="https://www.instagram.com/itz._.me._.satya/" target="_blank">
            <InstagramIcon />
          </a>
        </div>
      </div>
      <div className="card__texture"></div>
    </div>
  );
};

export default Card;
