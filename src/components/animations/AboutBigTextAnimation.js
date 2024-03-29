import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

/* We use the offset to remove the height of the job title since its absolutely positioned */
// We use left to either animate the colored screen to the left or right
function AboutBigTextAnimation({ children, offSet, direction }) {
  // This will help us remove this component from DOM once it'sfinished animating
  // We do this to reduce DOM size which affects page speed
  const [isVisible, setIsVisible] = useState(true);

  // These variables will enable us to control the animations programatically
  const bigTextControls = useAnimation();
  const coloredScreenControls = useAnimation();

  // We grab our element
  const ourRef = useRef(null);

  //   To help us know whenever our element is in view
  const isInView = useInView(ourRef, { once: true });

  //   We'll do this only after the first time our element is in view
  useEffect(() => {
    if (isInView) {
      bigTextControls.start("visible");
      coloredScreenControls.start("hidden");

      // We want to remove this component from DOM tree once it has finished animating (3 seconds maybe)
      // we do this to decrease DOM size as a large DOM tree will load slowly
      setTimeout(() => {
        setIsVisible(false);
      }, 2000);
    }
  }, [isInView]);

  // This will animate the Big Text element
  const bigTextVariants = {
    hidden: {
      y: "0px",
    },
    visible: {
      y: "0px",
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
    <div ref={ourRef} style={{ position: "relative" }}>
      {/* Here we'll animate our Big Text element */}
      <motion.div
        initial="hidden"
        animate={bigTextControls}
        variants={bigTextVariants}
        transition={{ duration: 2, delay: 0 }}
        style={{ overflow: "hidden" }}
      >
        {children}
        {/* Here we'll have a colored screen move across the view port */}
        {/* We want to remove this element from DM tree once it's finished animating */}
        {isVisible ? (
          <motion.div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              top: `${offSet}`,
              width: "100%",
              height: `calc(100% - ${offSet})`,
              backgroundColor: "orange",
              borderRadius: "2%",
              overflow: "hidden",
              zIndex: 1,
            }}
            initial="visible"
            animate={coloredScreenControls}
            variants={coloredScreenVariants}
            transition={{ duration: 2, ease: "backIn" }}
          ></motion.div>
        ) : null}
      </motion.div>
    </div>
  );
}

export default AboutBigTextAnimation;
