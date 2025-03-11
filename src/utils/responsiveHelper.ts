/**
 * Helper functions for responsive UI behavior
 */

export const setupResponsiveMenu = (): (() => void) => {
  // Get menu elements
  const hamburgerButton = document.getElementById("hamburger-button");
  const sideMenu = document.getElementById("side-menu");
  const overlay = document.getElementById("overlay");

  // Function to check screen size and handle menu visibility
  const handleScreenSize = () => {
    if (window.innerWidth >= 768) {
      // On desktop/larger screens
      if (hamburgerButton) hamburgerButton.style.display = "none";
      if (sideMenu) sideMenu.classList.remove("open");
      if (overlay) overlay.classList.remove("open");

      // Make sure body doesn't have any leftover blur
      document.body.classList.remove("blur-content");
    } else {
      // On mobile, make hamburger visible but closed by default
      if (hamburgerButton) hamburgerButton.style.display = "flex";
    }
  };

  // Run on init
  handleScreenSize();

  // Add event listener for screen resizing
  window.addEventListener("resize", handleScreenSize);

  // Return cleanup function
  return () => {
    window.removeEventListener("resize", handleScreenSize);
  };
};
