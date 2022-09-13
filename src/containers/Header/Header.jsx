import React from "react";
import AppWrap from "../../wrapper/AppWrap";
import "./Header.scss";
import { motion } from "framer-motion";

import { images } from "../../constants";
const technologies = [images.figma, images.react, images.sass];

const Header = () => {
  return (
    <div className="app__header app__flex">
      {/* text div */}
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I'am</p>
              <h1 className="head-text">Muhamed</h1>
            </div>
          </div>
          <div className="tag-cmp">
            <p className="p-text">Frontend developer</p>
            <p className="p-text">Freelancer</p>
          </div>
        </div>
      </motion.div>
      {/* image div */}
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="overlay_circle"
          src={images.circle}
        />
      </motion.div>

      <motion.div
        whileInView={{
          scale: [0, 1],
          opacity: [0, 1],
          transition: {
            duration: 0.5,
            ease: "easeInOut",
          },
        }}
        className="app__header-circles"
      >
        {technologies.map((circle, index) => (
          <div key={`circle-${index}`} className="app__flex">
            <img src={circle} alt="icons"></img>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
