import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface ParallaxSectionProps {
  children: React.ReactNode;
  backgroundImage?: string;
  backgroundOpacity?: number;
  parallaxStrength?: number;
  className?: string;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  backgroundImage,
  backgroundOpacity = 0.8,
  parallaxStrength = 0.2,
  className = "",
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Create a smoother scroll progress for better performance
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Calculate parallax effects with optimized values
  const backgroundY = useTransform(
    smoothProgress,
    [0, 1],
    ["0%", `${parallaxStrength * 100}%`]
  );

  const contentY = useTransform(
    smoothProgress,
    [0, 1],
    ["0%", `${-parallaxStrength * 50}%`]
  );

  const backgroundOpacityValue = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    [backgroundOpacity - 0.2, backgroundOpacity, backgroundOpacity - 0.1]
  );

  useEffect(() => {
    // Optimize scroll performance
    if (sectionRef.current) {
      sectionRef.current.style.willChange = "transform";
      sectionRef.current.style.backfaceVisibility = "hidden";
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative overflow-hidden ${className}`}
      style={{ perspective: "1000px" }}
    >
      {/* Parallax Background */}
      {backgroundImage && (
        <motion.div
          style={{
            y: backgroundY,
            opacity: backgroundOpacityValue,
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "110%", // Extra height for parallax movement
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 0,
            willChange: "transform, opacity",
          }}
          aria-hidden="true"
        />
      )}

      {/* Content with counter-parallax effect */}
      <motion.div
        style={{
          y: contentY,
          position: "relative",
          zIndex: 1,
          willChange: "transform",
        }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default ParallaxSection;
