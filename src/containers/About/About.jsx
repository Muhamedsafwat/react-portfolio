import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";

import "./About.scss";

import { client, urlFor } from "../../client";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text about-head">
        {" "}
        I Know that <span>Good Website</span> <br /> means{" "}
        <span>Good Business</span>{" "}
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            key={about + index}
            whileInView={{ opacity: [0, 1] }}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.5 }}
            className="app__profile-item"
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
