import React from "react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";

const SideMenu: React.FC = () => {
  return (
    <>
      {/* Overlay */}
      <div
        id="overlay"
        className="fixed inset-0 bg-black/70 z-40 hidden"
        aria-hidden="true"
      ></div>

      {/* Side Menu */}
      <div
        id="side-menu"
        className="fixed top-0 right-0 w-64 h-full bg-prometheus-bg z-50 transform translate-x-full transition-transform duration-300 shadow-2xl"
        aria-label="Mobile Navigation"
      >
        <div className="p-4 flex flex-col h-full">
          {/* Menu Header */}
          <div className="flex items-center justify-between mb-10">
            <div className="text-xl font-semibold">Menu</div>
            <button
              id="close-button"
              aria-label="Close Menu"
              className="text-prometheus-text hover:text-prometheus-accent transition-colors"
            >
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>

          {/* Mobile Theme Toggle - inside side menu with more vertical space */}
          <div className="flex justify-center mb-8">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center gap-3"
            >
              <ThemeToggle />
              <span className="text-sm text-prometheus-text/70 mt-2">
                Toggle Theme
              </span>
            </motion.div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `side-menu-link py-3 px-4 mb-2 rounded-lg transition-colors ${
                  isActive
                    ? "text-prometheus-accent bg-prometheus-accent/10 font-medium"
                    : "hover:bg-prometheus-accent/5"
                }`
              }
            >
              <i className="fas fa-home mr-3"></i>
              Home
            </NavLink>
            <NavLink
              to="/resume"
              className={({ isActive }) =>
                `side-menu-link py-3 px-4 mb-2 rounded-lg transition-colors ${
                  isActive
                    ? "text-prometheus-accent bg-prometheus-accent/10 font-medium"
                    : "hover:bg-prometheus-accent/5"
                }`
              }
            >
              <i className="fas fa-file-alt mr-3"></i>
              Resume
            </NavLink>
            <NavLink
              to="/work"
              className={({ isActive }) =>
                `side-menu-link py-3 px-4 mb-2 rounded-lg transition-colors ${
                  isActive
                    ? "text-prometheus-accent bg-prometheus-accent/10 font-medium"
                    : "hover:bg-prometheus-accent/5"
                }`
              }
            >
              <i className="fas fa-briefcase mr-3"></i>
              Work
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `side-menu-link py-3 px-4 mb-2 rounded-lg transition-colors ${
                  isActive
                    ? "text-prometheus-accent bg-prometheus-accent/10 font-medium"
                    : "hover:bg-prometheus-accent/5"
                }`
              }
            >
              <i className="fas fa-envelope mr-3"></i>
              Contact
            </NavLink>

            {/* Hire Me Button */}
            <NavLink
              to="/hire-me"
              className="mt-4 py-3 px-4 bg-prometheus-accent text-white rounded-lg text-center font-medium shadow-lg hover:bg-prometheus-accent-darker transition-colors flex items-center justify-center"
            >
              <i className="fas fa-hand-paper mr-2"></i>
              Hire Me
            </NavLink>
          </nav>

          {/* Social Links */}
          <div className="mt-auto pt-6 flex justify-center space-x-4">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-prometheus-text hover:text-prometheus-accent transition-colors"
              aria-label="GitHub Profile"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-prometheus-text hover:text-prometheus-accent transition-colors"
              aria-label="LinkedIn Profile"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-prometheus-text hover:text-prometheus-accent transition-colors"
              aria-label="Twitter Profile"
            >
              <i className="fab fa-twitter text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
