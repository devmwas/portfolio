import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

function MessageAnimation({ children, isMessageOpen }) {
  // We create refs to grab our animation element
  const ourRef = useRef(null);

  // We'll use this to control our animation programatically
  const messageAnimationControls = useAnimation();

  //   We want to animate on closing the modal or sending the message
  useEffect(() => {
    if (isMessageOpen) {
      // We show the message modal
      messageAnimationControls.start("middle");
      //   messageAnimationExitControls.start("middle");
    }
  }, [isMessageOpen]);

  // Our Variants
  const messageAnimationVariants = {
    down: {
      y: "100vh",
    },
    middle: {
      y: "20px",
    },
    up: {
      y: "-100vh",
    },
  };

  return (
    <motion.div
      ref={ourRef}
      initial="down"
      animate={messageAnimationControls}
      exit={"up"}
      variants={messageAnimationVariants}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

export default MessageAnimation;
