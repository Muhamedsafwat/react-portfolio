import React from "react";

import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const SocialIcons = () => {
  return (
    <div className="app__social">
      <a
        href="https://www.linkedin.com/in/mohamed-safwat-46a840214/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/Muhamedsafwat"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.instagram.com/muhamedsafwat_/"
        target="_blank"
        rel="noreferrer"
      >
        <BsInstagram />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100084124117560"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebook />
      </a>
    </div>
  );
};

export default SocialIcons;
