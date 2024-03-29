import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

function IntroHeadingAnimation({ children, letterSpacing = null }) {
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
      left: "-16.5%",
    },
    normalSpace: {
      letterSpacing: letterSpacing || "-1px",
      width: "fit-content",
      left: 0,
    },
  };

  return (
    <motion.div
      ref={ourRef}
      className="bg-yellow=-500"
      style={{
        position: "absolute",
        overflow: "hidden",
      }}
      variants={headingVariants}
      initial="spacedOut"
      animate={headingControls}
      transition={{ duration: 2 }}
    >
      {children}
    </motion.div>
  );
}

export default IntroHeadingAnimation;
