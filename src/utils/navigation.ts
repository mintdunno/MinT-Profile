/**
 * Navigation utility functions
 */

export const setActiveLink = (path: string): void => {
  // Remove 'active' class from all links
  document
    .querySelectorAll(".nav-link, .side-menu-link")
    .forEach((link) => link.classList.remove("active"));

  // Add 'active' class to links that match the current path
  document.querySelectorAll(".nav-link, .side-menu-link").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === path || (path === "/" && href === "/")) {
      link.classList.add("active");
    }
  });
};

export const closeSideMenu = (): void => {
  const sideMenu = document.getElementById("side-menu");
  const overlay = document.getElementById("overlay");
  const hamburgerButton = document.getElementById("hamburger-button");
  const mainContent = document.getElementById("main-content");

  if (sideMenu && overlay && hamburgerButton && mainContent) {
    sideMenu.classList.remove("open");
    overlay.classList.remove("open");
    hamburgerButton.classList.remove("open");
    document.body.classList.remove("overflow-hidden");
    mainContent.classList.remove("blur-content");
  }
};

export const openSideMenu = (): void => {
  const sideMenu = document.getElementById("side-menu");
  const overlay = document.getElementById("overlay");
  const hamburgerButton = document.getElementById("hamburger-button");
  const mainContent = document.getElementById("main-content");

  if (sideMenu && overlay && hamburgerButton && mainContent) {
    sideMenu.classList.add("open");
    overlay.classList.add("open");
    hamburgerButton.classList.add("open");
    document.body.classList.add("overflow-hidden");
    mainContent.classList.add("blur-content");
  }
};
