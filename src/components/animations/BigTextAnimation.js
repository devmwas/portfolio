import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

/* We use the offset to remove the height of the job title since its absolutely positioned */
// We use left to either animate the colored screen to the left or right
function BigTextAnimation({
  children,
  offSet,
  direction,
  width = "100%",
  left,
}) {
  // These variables will enable us to control the animations programatically
  const bigTextControls = useAnimation();
  const coloredScreenControls = useAnimation();

  // We grab our element
  const ourRef = useRef();

  //   To help us know whenever our element is in view
  const isInView = useInView(ourRef, { once: true });

  //   We'll do this only after the first time our element is in view
  useEffect(() => {
    if (isInView) {
      bigTextControls.start("visible");
      coloredScreenControls.start("hidden");
    }
  }, [isInView]);

  // This will animate the Big Text element
  const bigTextVariants = {
    hidden: {
      y: "40px",
      opacity: 0,
    },
    visible: {
      y: "0px",
      opacity: 1,
    },
  };

  // This will animate the colored screen element
  const coloredScreenVariants = {
    visible: {
      left: "0%",
    },
    hidden: {
      // The direction property controls where the colored screen goes horizotally
      left: direction === "left" ? "-100%" : "100%",
    },
  };

  return (
    <div ref={ourRef} style={{ position: "relative", left }}>
      {/* Here we'll animate our Big Text element */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={bigTextVariants}
        transition={{ duration: 1, delay: 0.25 }}
        style={{ overflow: "hidden" }}
      >
        {children}

        {/* Here we'll have a colored screen move across the view port */}
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            top: `${offSet}`,
            width: "100%",
            height: `calc(100% - ${offSet})`,
            backgroundColor: "orange",
            zIndex: 1,
          }}
          initial="visible"
          animate="hidden"
          variants={coloredScreenVariants}
          transition={{ duration: 2 }}
        ></motion.div>
      </motion.div>
    </div>
  );
}

export default BigTextAnimation;
