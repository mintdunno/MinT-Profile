import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const [isInitialMount, setIsInitialMount] = useState(true);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    // We only want to set this once when the component first mounts
    if (!hasAnimatedRef.current) {
      hasAnimatedRef.current = true;

      // Add a short timeout to ensure component is fully mounted
      const timer = setTimeout(() => {
        setIsInitialMount(false);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, []);

  const parentVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        ease: [0.25, 0.1, 0.25, 1],
        duration: 0.6,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
        ease: [0.25, 0.1, 0.25, 1],
        duration: 0.4,
      },
    },
  };

  return (
    <div className="relative overflow-hidden will-change-transform">
      {/* Content with premium reveal animation */}
      <motion.div
        variants={parentVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="page-content-wrapper relative z-10"
      >
        {children}
      </motion.div>

      {/* Premium portal transition effect */}
      {!isInitialMount && (
        <motion.div
          className="fixed inset-0 z-50 pointer-events-none transition-portal"
          initial={{ scaleX: 0, originX: 0 }}
          exit={{
            scaleX: 1,
            transition: {
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1.0],
            },
          }}
        />
      )}

      {/* Luxury curtain reveal effect - first layer */}
      {!isInitialMount && (
        <motion.div
          className="fixed inset-0 z-51 pointer-events-none transition-curtain-1"
          initial={{ scaleX: 0, originX: 0 }}
          exit={{
            scaleX: 1,
            transition: {
              duration: 0.65,
              ease: [0.25, 0.1, 0.25, 1.0],
              delay: 0.05,
            },
          }}
        />
      )}

      {/* Luxury curtain reveal effect - second layer */}
      {!isInitialMount && (
        <motion.div
          className="fixed inset-0 z-52 pointer-events-none transition-curtain-2"
          initial={{ scaleX: 0, originX: 0 }}
          exit={{
            scaleX: 1,
            transition: {
              duration: 0.55,
              ease: [0.25, 0.1, 0.25, 1.0],
              delay: 0.1,
            },
          }}
        />
      )}

      {/* Enhanced shimmer effect for premium feel */}
      {!isInitialMount && (
        <motion.div
          className="fixed inset-0 z-53 pointer-events-none transition-shimmer"
          initial={{ x: "-100%", opacity: 0.7 }}
          exit={{
            x: "100%",
            opacity: 0.7,
            transition: {
              duration: 1.0,
              ease: [0.25, 0.1, 0.25, 1.0],
              delay: 0.15,
            },
          }}
        />
      )}
    </div>
  );
};

export default PageTransition;
