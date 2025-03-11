import { useEffect, useState } from "react";
import "../styles/GoToTopButton.css"; // We'll create this for component-specific styles

const GoToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", toggleVisibility);

    // Initial check
    toggleVisibility();

    // Clean up
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`go-top-btn ${isVisible ? "show" : ""}`}
      onClick={scrollToTop}
      aria-label="Go to top"
      title="Go to top"
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  );
};

export default GoToTopButton;
