import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

/* We use the offset to remove the height of the job title since its absolutely positioned */
// We use left to either animate the colored screen to the left or right
function ProjectDescriptionAnimation({ children, offSet, direction }) {
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
    }
  }, [isInView]);

  // This will animate the Big Text element
  const bigTextVariants = {
    hidden: {
      y: "20px",
    },
    visible: {
      y: "0px",
    },
  };

  // This will animate the colored screen element
  const coloredScreenVariants = {
    visible: {
      // We use the direction prop to know where to start our left as
      left: direction === "left" ? "-50%" : "0%",
      width: "150%",
    },
    hidden: {
      // The direction property controls where the colored screen goes horizotally
      left: direction === "left" ? "-50%" : "150%",
      width: "0%",
    },
  };

  return (
    <div
      ref={ourRef}
      style={{
        position: "relative",
      }}
    >
      {/* Here we'll animate our Big Text element */}
      <motion.div
        initial="hidden"
        animate={bigTextControls}
        variants={bigTextVariants}
        transition={{ duration: 1, delay: 0 }}
      >
        {children}

        {/* Here we'll have a colored screen move across the view port */}
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: direction === "right" ? "0%" : "-50%",
            right: "0%",
            bottom: 0,
            top: `${offSet}`,
            width: "150%",
            height: `calc(100% - ${offSet})`,
            backgroundColor: "orange",
            borderRadius: "2%",
            overflow: "hidden",
            zIndex: 1,
          }}
          initial="visible"
          animate={coloredScreenControls}
          variants={coloredScreenVariants}
          transition={{ duration: 1.5, ease: "backIn" }}
        ></motion.div>
      </motion.div>
    </div>
  );
}

export default ProjectDescriptionAnimation;
