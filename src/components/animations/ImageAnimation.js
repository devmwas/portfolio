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
      imageAnimationControls.start("show");
    }
  }, [isInView]);

  // Our Variants
  const imageAnimationVariants = {
    hidden: {
      transform: "scale(.5)",
    },
    show: {
      transform: "scale(2)",
    },
  };

  return (
    <motion.div
      ref={ourRef}
      initial="hidden"
      animate={imageAnimationControls}
      variants={imageAnimationVariants}
      transition={{ duration: 5 }}
    >
      {children}
    </motion.div>
  );
}

export default ImageAnimation;
