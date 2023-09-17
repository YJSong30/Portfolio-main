import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import "./Footer.css";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a
          href="mailto:youngsong1230@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            className="email"
          ></FontAwesomeIcon>
        </a>

        <a href="https://www.linkedin.com/in/young-song-1954251ab/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon
          icon={faLinkedin}
          className="linkedin"
        ></FontAwesomeIcon>
        </a>

        <a href="https://github.com/YJSong30" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} className="github"></FontAwesomeIcon>
        </a>
      </div>
      <p> &copy; 2023 youngjinsong.com</p>
    </div>
  );
}

export default Footer