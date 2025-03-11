import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

interface TransitionProviderProps {
  children: React.ReactNode;
}

const TransitionProvider: React.FC<TransitionProviderProps> = ({
  children,
}) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage("fadeOut");
    }
  }, [location, displayLocation]);

  const handleAnimationEnd = () => {
    if (transitionStage === "fadeOut") {
      setTransitionStage("fadeIn");
      setDisplayLocation(location);
    }
  };

  return (
    <div className="effect-container">
      <AnimatePresence mode="wait">
        <motion.div
          key={displayLocation.pathname}
          className="effect-page"
          onAnimationComplete={handleAnimationEnd}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
      <motion.div
        className="page-transition-block bg-prometheus-accent"
        initial={{ scaleY: 1, originY: 0 }}
        animate={{ scaleY: 0, originY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.5, ease: [0.645, 0.045, 0.355, 1] }}
      />
      <motion.div
        className="page-transition-block bg-prometheus-light-blue"
        initial={{ scaleY: 1, originY: 1 }}
        animate={{ scaleY: 0, originY: 1 }}
        exit={{ scaleY: 0 }}
        transition={{
          duration: 0.5,
          ease: [0.645, 0.045, 0.355, 1],
          delay: 0.1,
        }}
      />
      <motion.div
        className="page-transition-block bg-prometheus-accent-darker"
        initial={{ scaleY: 1, originY: 0 }}
        animate={{ scaleY: 0, originY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{
          duration: 0.5,
          ease: [0.645, 0.045, 0.355, 1],
          delay: 0.2,
        }}
      />
    </div>
  );
};

export default TransitionProvider;
