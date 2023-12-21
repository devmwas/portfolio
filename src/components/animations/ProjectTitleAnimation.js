import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

function ProjectTitleAnimation({
  children,
  letterSpacing,
  lineHeight,
  fontSize,
}) {
  // Creating a ref for our element
  const ourRef = useRef(null);

  // This will help us know whenever our Headings are in view for the first time
  const isInView = useInView(ourRef, { once: false });

  // This variable will help us control the animation programatically
  const projectTitleControls = useAnimation();

  // We execute this effect whenever our element is in view
  useEffect(() => {
    if (isInView) {
      projectTitleControls.start("normalSpace");
    }
  }, [isInView]);

  // Our Variants
  const projectTitleVariants = {
    spacedOut: {
      letterSpacing: "24px",
      width: "300%",
      marginLeft: "-100%",
    },
    normalSpace: {
      letterSpacing,
      width: "100%",
      marginLeft: "0%",
    },
  };

  return (
    <motion.div
      ref={ourRef}
      style={{
        lineHeight,
        fontSize,
        position: "absolute",
        top: 0,
        zIndex: 30,
      }}
      initial="spacedOut"
      variants={projectTitleVariants}
      animate={projectTitleControls}
      transition={{ duration: 1.5 }}
    >
      {children}
    </motion.div>
  );
}

export default ProjectTitleAnimation;
