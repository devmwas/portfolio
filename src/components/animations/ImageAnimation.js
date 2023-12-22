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
      transform: "scale(.5)",
    },
    normal: {
      transform: "scale(1)",
    },
    // squeezed: {
    //   transform: "scale(0.9)",
    //   transition: { duration: 0.5 },
    // },
  };

  return (
    <motion.div
      ref={ourRef}
      style={{
        opacity: 0.6,
      }}
      initial="hidden"
      animate={imageAnimationControls}
      variants={imageAnimationVariants}
      exit="squeezed"
      transition={{ duration: 3 }}
      whileHover={{ opacity: 1, duration: 3 }}
    >
      {children}
    </motion.div>
  );
}

export default ImageAnimation;
