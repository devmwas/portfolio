import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

function MoveUp({ children }) {
  // We create refs to grab our animation element
  const ourRef = useRef(null);

  // We'll use this to control our animation programatically
  const projectAnimationControls = useAnimation();

  // This will help us know whether our project is in view
  const isInView = useInView(ourRef, { once: true });

  //These will be the values of our animation
  const projectAnimationVariants = {
    bottom: {
      marginTop: "50%",
    },
    top: {
      marginTop: "0px",
    },
  };

  //When our project is in view, we start the animation
  useEffect(() => {
    if (isInView) projectAnimationControls.start("top");
  }, [isInView]);

  return (
    <motion.div
      ref={ourRef}
      initial="bottom"
      animate={projectAnimationControls}
      variants={projectAnimationVariants}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
}

export default MoveUp;
