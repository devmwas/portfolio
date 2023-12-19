import { motion } from "framer-motion";

import React from "react";

function ProjectsHeadingAnimation({
  children,
  fontSize,
  lineHeight,
  letterSpacing,
  wordSpacing,
}) {
  const headingVariants = {
    spacedOut: {
      fontSize,
      lineHeight,
      letterSpacing: "24px",
      wordSpacing,
      left: "-100px",
    },
    normalSpace: {
      fontSize,
      lineHeight,
      letterSpacing,
      wordSpacing,
      left: "0px",
    },
  };

  return (
    <motion.div
      style={{
        position: "relative",
        overflow: "hidden",
      }}
      variants={headingVariants}
      initial="spacedOut"
      animate="normalSpace"
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
}

export default ProjectsHeadingAnimation;
