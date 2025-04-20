import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

function MoveDown({ children }) {
  // We create refs to grab our animation element
  const ourRef = useRef(null);

  // We'll use this to control our animation programatically
  const moveDownControls = useAnimation();

  // This will help us know whether our project is in view
  const isInView = useInView(ourRef, { once: true });

  //These will be the values of our animation
  const moveDownVariants = {
    top: {
      marginTop: "-50%",
    },
    bottom: {
      marginTop: "0px",
    },
  };

  //When our project is in view, we start the animation
  useEffect(() => {
    if (isInView) moveDownControls.start("bottom");
  }, [isInView]);

  return (
    <motion.div
      ref={ourRef}
      initial="top"
      animate={moveDownControls}
      variants={moveDownVariants}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
}

export default MoveDown;
