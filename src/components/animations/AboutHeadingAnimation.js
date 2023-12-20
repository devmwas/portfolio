import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

function AboutHeadingAnimation({
  children,
  fontSize,
  letterSpacing,
  lineHeight,
  right,
}) {
  // We create refs to grab our animation element
  const ourRef = useRef(null);

  // We'll use this to control our animation programatically
  const aboutHeadingControls = useAnimation();

  // This will tell us whether our element is in view or not
  const isInView = useInView(ourRef, { once: true });

  // We execute this effect whenever our element is in view
  useEffect(() => {
    if (isInView) {
      aboutHeadingControls.start("normalSpace");
    }
  }, [isInView]);

  // Our Variants
  const headingVariants = {
    spacedOut: {
      fontSize,
      lineHeight,
      right: "-100px",
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
      ref={ourRef}
      style={{
        position: "absolute",
        overflow: "hidden",
      }}
      variants={headingVariants}
      initial="spacedOut"
      animate={aboutHeadingControls}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
}

export default AboutHeadingAnimation;
