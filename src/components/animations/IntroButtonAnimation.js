import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

function IntroButtonAnimation({ children }) {
  // We create refs to grab our animation element
  const ourRef = useRef(null);

  // We'll use this to control our animation programatically
  const introButtonControls = useAnimation();

  // This will tell us whether our element is in view or not
  const isInView = useInView(ourRef, { once: true });

  // We execute this effect whenever our element is in view
  useEffect(() => {
    if (isInView) {
      introButtonControls.start("show");
    }
  }, [isInView]);

  // Our Variants
  const introButtonVariants = {
    hidden: {
      opacity: 0,
      transform: "scaleY(0)",
    },
    show: {
      opacity: 1,
      transform: "scaleY(1)",
    },
  };

  return (
    <motion.div
      className="rounded-md w-1/4 min-w-[200px]"
      ref={ourRef}
      initial="hidden"
      animate={introButtonControls}
      variants={introButtonVariants}
      transition={{ duration: 0.5, delay: 1.5 }}
    >
      {children}
    </motion.div>
  );
}

export default IntroButtonAnimation;
