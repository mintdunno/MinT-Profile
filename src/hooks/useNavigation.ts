import { useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { closeSideMenu, openSideMenu } from "../utils/navigation";

export const useNavigation = () => {
  // const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const hamburgerButton = document.getElementById("hamburger-button");
    const overlay = document.getElementById("overlay");
    const closeButton = document.getElementById("close-button");

    // Set active link based on current location
    const setActiveLink = () => {
      const path = location.pathname;
      const navLinks = document.querySelectorAll(".nav-link");
      const sideMenuLinks = document.querySelectorAll(".side-menu-link");

      // Remove active class from all links
      [...navLinks, ...sideMenuLinks].forEach((link) => {
        link.classList.remove("active");
      });

      // Add active class to current path link
      [...navLinks, ...sideMenuLinks].forEach((link) => {
        const linkPath = link.getAttribute("href");
        if (linkPath === path || (path === "/" && linkPath === "/")) {
          link.classList.add("active");
        }
      });
    };

    // Set active link on mount and when location changes
    setActiveLink();

    // Hamburger button click event
    if (hamburgerButton) {
      hamburgerButton.addEventListener("click", openSideMenu);
    }

    // Close button click event
    if (closeButton) {
      closeButton.addEventListener("click", closeSideMenu);
    }

    // Overlay click event (to close the menu)
    if (overlay) {
      overlay.addEventListener("click", closeSideMenu);
    }

    // Keyboard navigation for accessibility
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeSideMenu();
      }
    };

    document.addEventListener("keydown", handleEscKey);

    return () => {
      // Clean up event listeners
      if (hamburgerButton)
        hamburgerButton.removeEventListener("click", openSideMenu);
      if (closeButton) closeButton.removeEventListener("click", closeSideMenu);
      if (overlay) overlay.removeEventListener("click", closeSideMenu);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [location.pathname]);
};

export default useNavigation;
