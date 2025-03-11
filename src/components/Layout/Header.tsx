import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for header styling
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 40;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-prometheus-bg/50 backdrop-blur-md shadow-md"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Using previous MinT logo */}
        <Link to="/" className="text-3xl font-bold">
          MinT.
        </Link>

        <div className="flex items-center gap-4">
          {/* Mobile Theme Toggle - always visible */}
          <div className="flex items-center md:order-2">
            <ThemeToggle />
          </div>

          {/* Navigation Links - hidden on mobile */}
          <nav className="hidden md:flex space-x-6 mr-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-link ${
                  isActive ? "active" : ""
                } hover:text-prometheus-accent transition-colors`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/resume"
              className={({ isActive }) =>
                `nav-link ${
                  isActive ? "active" : ""
                } hover:text-prometheus-accent transition-colors`
              }
            >
              Resume
            </NavLink>
            <NavLink
              to="/work"
              className={({ isActive }) =>
                `nav-link ${
                  isActive ? "active" : ""
                } hover:text-prometheus-accent transition-colors`
              }
            >
              Work
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `nav-link ${
                  isActive ? "active" : ""
                } hover:text-prometheus-accent transition-colors`
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* Hamburger Menu Button - Only on mobile */}
          <div className="md:hidden">
            <button
              id="hamburger-button"
              aria-label="Toggle Menu"
              className="focus:outline-none"
            >
              <span className="hamburger-bar"></span>
              <span className="hamburger-bar"></span>
              <span className="hamburger-bar"></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
