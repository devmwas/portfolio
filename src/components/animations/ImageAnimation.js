import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

function ImageAnimation({ children }) {
  // We create refs to grab our animation element
  const ourRef = useRef(null);

  // We'll use this to control our animation programatically
  const imageAnimationControls = useAnimation();

  // This will tell us whether our element is in view or not
  const isInView = useInView(ourRef, { once: true });

  // We execute this effect whenever our element is in view
  useEffect(() => {
    if (isInView) {
      //   imageAnimationControls.start("zoomed");
      imageAnimationControls.start("normal");
    }
  }, [isInView]);

  // Our Variants
  const imageAnimationVariants = {
    minimized: {
      transform: "scale(.8)",
    },
    normal: {
      transform: "scale(1)",
    },
  };

  return (
    <motion.div
      ref={ourRef}
      initial="minimized"
      animate={imageAnimationControls}
      variants={imageAnimationVariants}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default ImageAnimation;
