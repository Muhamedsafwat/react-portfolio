import React from "react";
import { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import "./Navbar.scss";

import { images } from "../../constants";

const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const navElements = ["home", "about", "work", "skills", "contact"];
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {navElements.map((element) => (
          <li className="app__flex p-text" key={`link-${element}`}>
            <div />
            <a href={`#${element}`}>{element}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setMenuIsOpen(true)} />
        {menuIsOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <HiX onClick={() => setMenuIsOpen(false)} />
            <ul>
              {navElements.map((element) => (
                <li key={element}>
                  <a onClick={() => setMenuIsOpen(false)} href={`#${element}`}>
                    {element}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
