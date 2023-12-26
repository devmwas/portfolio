import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

function IntroHeadingAnimation({
  children,
  fontSize,
  letterSpacing,
  lineHeight,
  left,
  startingLeft,
  marginTop,
}) {
  // Creating a ref for our element
  const ourRef = useRef(null);

  // This will help us know whenever our Headings are in view for the first time
  const isInView = useInView(ourRef, { once: true });

  // This variable will help us control the animation programatically
  const headingControls = useAnimation();

  // We execute this effect whenever our element is in view
  useEffect(() => {
    if (isInView) {
      headingControls.start("normalSpace");
    }
  }, [isInView]);

  // Our Variants
  const headingVariants = {
    spacedOut: {
      letterSpacing: "24px",
      width: "300vw",
      left: startingLeft,
    },
    normalSpace: {
      left,
      letterSpacing,
      width: "fit-content",
    },
  };

  return (
    <motion.div
      ref={ourRef}
      style={{
        marginTop,
        fontSize,
        lineHeight,
        position: "absolute",
        overflow: "hidden",
      }}
      variants={headingVariants}
      initial="spacedOut"
      animate={headingControls}
      transition={{ duration: 1.5 }}
    >
      {children}
    </motion.div>
  );
}

export default IntroHeadingAnimation;
