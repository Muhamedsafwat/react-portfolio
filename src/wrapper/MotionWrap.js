import React from "react";
import { motion } from "framer-motion";

const MotionWrap = (Component, classNames) =>
  function HOC() {
    return (
      <motion.div
        whileInView={{ opacity: [0, 1], y: [150, 0] }}
        transition={{ duration: 0.5 }}
        className={`${classNames} app__flex`}
      >
        <Component />
      </motion.div>
    );
  };

export default MotionWrap;
