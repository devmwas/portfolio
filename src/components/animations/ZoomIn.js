import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

function ZoomIn({ children }) {
  // We create refs to grab our animation element
  const ourRef = useRef(null);

  // We'll use this to control our animation programatically
  const zoomInControls = useAnimation();

  // This will help us know whether our project is in view
  const isInView = useInView(ourRef, { once: true });

  //These will be the values of our animation
  const zoomInVariants = {
    squeezed: {
      transform: "scale(.8)",
    },
    normal: {
      transform: "scale(1)",
    },
  };

  //When our project is in view, we start the animation
  useEffect(() => {
    if (isInView) zoomInControls.start("normal");
  }, [isInView]);

  return (
    <motion.div
      ref={ourRef}
      initial="squeezed"
      animate={zoomInControls}
      variants={zoomInVariants}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
}

export default ZoomIn;
