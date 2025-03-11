import React, { ReactNode, useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import SideMenu from "./SideMenu";
import useNavigation from "../../hooks/useNavigation";
import { initCounterAnimations } from "../../utils/animations";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // Initialize navigation hooks for menu functionality
  useNavigation();
  const location = useLocation();
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Initialize counter animations when layout mounts
    initCounterAnimations();

    // Set document title based on current page
    const path = location.pathname;
    let title = "MinT Portfolio";

    if (path.includes("resume")) title = "Resume | MinT Portfolio";
    else if (path.includes("work")) title = "Work | MinT Portfolio";
    else if (path.includes("contact")) title = "Contact | MinT Portfolio";
    else if (path.includes("hire-me")) title = "Hire Me | MinT Portfolio";

    document.title = title;

    // Add stagger animation classes to children
    if (mainRef.current) {
      const directChildren = mainRef.current.children;
      Array.from(directChildren).forEach((child, index) => {
        if (!child.classList.contains("stagger-item")) {
          child.classList.add("stagger-item");

          // Use setTimeout to stagger the animation start
          setTimeout(() => {
            child.classList.add("stagger-fade-in");
          }, 100 + index * 100); // Base delay + staggered delay
        }
      });
    }
  }, [location]);

  // Variants for premium animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const childVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  };

  return (
    <div className="bg-prometheus-bg text-prometheus-text font-poppins min-h-screen flex flex-col justify-between">
      <Header />
      <SideMenu />
      <motion.main
        ref={mainRef}
        className="container mx-auto px-4 py-12 flex-grow premium-content"
        id="main-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          willChange: "transform, opacity",
          perspective: "1000px",
        }}
      >
        <motion.div
          variants={childVariants}
          className="w-full premium-content-wrapper"
        >
          {children}
        </motion.div>
      </motion.main>
      <Footer />
    </div>
  );
};

export default Layout;
