import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

function HeadingAnimation({
  children,
  fontSize,
  lineHeight,
  letterSpacing,
  wordSpacing,
  left,
  top,
}) {
  // Creating a ref for our element
  const ourRef = useRef(null);

  // This will help us know whenever our Headings are in view for the first time
  const isInView = useInView(ourRef, { once: true });

  // This variable will help us control the animation programatically
  const projectHeadingControls = useAnimation();

  // We execute this effect whenever our element is in view
  useEffect(() => {
    if (isInView) {
      projectHeadingControls.start("normalSpace");
    }
  }, [isInView]);

  // Our Variants
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
      left,
    },
  };

  return (
    <motion.div
      ref={ourRef}
      style={{
        position: "absolute",
        overflow: "hidden",
        top,
      }}
      variants={headingVariants}
      initial="spacedOut"
      animate={projectHeadingControls}
      transition={{ duration: 1.5 }}
    >
      {children}
    </motion.div>
  );
}

export default HeadingAnimation;
