import { motion } from "framer-motion";

import React from "react";

function IntroHeadingAnimation({
  children,
  fontSize,
  letterSpacing,
  lineHeight,
  left,
  startingLeft,
}) {
  const headingVariants = {
    spacedOut: {
      fontSize,
      lineHeight,
      display: "flex",
      justifyContent: "center",
      letterSpacing: "24px",
      width: "300%",
      left: startingLeft,
      //   transform: "scaleX(2)",
    },
    normalSpace: {
      left,
      fontSize,
      lineHeight,
      display: "flex",
      justifyContent: "start",
      letterSpacing,
      width: "100%",
      //   transform: "scaleX(1)",
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

export default IntroHeadingAnimation;
