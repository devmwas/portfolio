import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

function ExpandedMenuAnimation({ children, showExpandedMenu }) {
  // We create refs to grab our animation element
  const ourRef = useRef(null);

  // We'll use this to control our animation programatically
  const ExpandedMenuAnimationControls = useAnimation();

  //   We want to animate on closing the modal or sending the message
  useEffect(() => {
    if (showExpandedMenu) {
      // We show the Expanded menu
      ExpandedMenuAnimationControls.start("show");
    }
  }, [showExpandedMenu]);

  // Our Variants
  const ExpandedMenuAnimationVariants = {
    show: {
      y: "0vh",
    },
    hide: {
      y: "-100vh",
    },
  };

  return (
    <motion.div
      ref={ourRef}
      initial="hide"
      animate={ExpandedMenuAnimationControls}
      variants={ExpandedMenuAnimationVariants}
      exit={"hide"}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

export default ExpandedMenuAnimation;
