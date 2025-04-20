import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

function DelayAnimation({ children, duration = 1, delay }) {
  // We create refs to grab our animation element
  const ourRef = useRef(null);

  // We'll use this to control our animation programatically
  const delayAnimationControls = useAnimation();

  // This will tell us whether our element is in view or not
  const isInView = useInView(ourRef, { once: true });

  // We execute this effect whenever our element is in view
  useEffect(() => {
    if (isInView) {
      delayAnimationControls.start("show");
    }
  }, [isInView]);

  // Our Variants
  const delayAnimationVariants = {
    hidden: {
      transform: "scale(.8)",
    },
    show: {
      transform: "scale(1)",
    },
  };

  return (
    <motion.div
      ref={ourRef}
      initial="hidden"
      animate={delayAnimationControls}
      variants={delayAnimationVariants}
      transition={{ delay, duration }}
    >
      {children}
    </motion.div>
  );
}

export default DelayAnimation;
