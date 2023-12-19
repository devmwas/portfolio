import { motion } from "framer-motion";

import React from "react";

function AboutHeadingAnimation({
  children,
  fontSize,
  letterSpacing,
  lineHeight,
  right,
}) {
  const headingVariants = {
    spacedOut: {
      right: "-100px",
      fontSize,
      lineHeight,
      letterSpacing: "24px",
    },
    normalSpace: {
      right,
      fontSize,
      lineHeight,
      letterSpacing,
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

export default AboutHeadingAnimation;
