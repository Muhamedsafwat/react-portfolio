import React from "react";

const navElements = [
  "home",
  "about",
  "work",
  "skills",
  "testimonials",
  "contact",
];

const NavDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {navElements.map((element) => (
        <a
          style={active === element ? { backgroundColor: "#313bac" } : {}}
          key={element}
          href={`#${element}`}
          className="app__navigation-dot"
        />
      ))}
    </div>
  );
};

export default NavDots;
