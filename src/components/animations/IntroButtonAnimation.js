import React from "react";
import { motion } from "framer-motion";

function IntroButtonAnimation({ children }) {
  const introButtonVariants = {
    hidden: {
      opacity: 0,
      transform: "scaleY(.1)",
    },
    show: {
      opacity: 1,
      transform: "scaleY(1)",
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={introButtonVariants}
      transition={{ duration: 0.3, delay: 1 }}
    >
      {children}
    </motion.div>
  );
}

export default IntroButtonAnimation;
