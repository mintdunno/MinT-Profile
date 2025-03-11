import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface PremiumRevealProps {
  children: React.ReactNode;
  direction?: "bottom" | "left" | "right" | "scale" | "none";
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  style?: React.CSSProperties;
}

const PremiumReveal: React.FC<PremiumRevealProps> = ({
  children,
  direction = "bottom",
  delay = 0,
  duration = 0.8,
  className = "",
  threshold = 0.1,
  style = {},
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);
  const observer = useRef<IntersectionObserver | null>(null);

  // Define animation variants based on direction
  const getVariants = () => {
    const baseTransition = {
      duration,
      delay,
      ease: [0.25, 0.1, 0.25, 1.0],
    };

    switch (direction) {
      case "left":
        return {
          hidden: { x: -30, opacity: 0 },
          visible: {
            x: 0,
            opacity: 1,
            transition: baseTransition,
          },
        };
      case "right":
        return {
          hidden: { x: 30, opacity: 0 },
          visible: {
            x: 0,
            opacity: 1,
            transition: baseTransition,
          },
        };
      case "scale":
        return {
          hidden: { scale: 0.92, opacity: 0 },
          visible: {
            scale: 1,
            opacity: 1,
            transition: baseTransition,
          },
        };
      case "none":
        return {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: baseTransition,
          },
        };
      case "bottom":
      default:
        return {
          hidden: { y: 30, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: baseTransition,
          },
        };
    }
  };

  const variants = getVariants();
  const [animate, setAnimate] = React.useState("hidden");

  useEffect(() => {
    // Only observe if we haven't animated yet
    if (hasAnimated.current) return;

    observer.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          setAnimate("visible");
          hasAnimated.current = true;

          // Stop observing after animation
          if (observer.current && elementRef.current) {
            observer.current.unobserve(elementRef.current);
          }
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.current.observe(elementRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [threshold]);

  return (
    <motion.div
      ref={elementRef}
      className={`premium-reveal ${className}`}
      initial="hidden"
      animate={animate}
      variants={variants}
      style={{
        willChange: "transform, opacity",
        ...style,
      }}
    >
      {children}
    </motion.div>
  );
};

export default PremiumReveal;
