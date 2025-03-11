import React from "react";
import useTheme from "../../hooks/useTheme";

const ThemeToggleButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  // Use different styles based on the current theme
  const buttonClasses =
    theme === "dark"
      ? "relative bg-gradient-to-r from-prometheus-light-blue/80 to-prometheus-accent/70 p-2.5 rounded-full hover:shadow-lg hover:shadow-prometheus-accent/30 transition-all duration-300 hover:-translate-y-1"
      : "relative bg-gradient-to-r from-prometheus-accent/70 to-prometheus-light-blue/80 p-2.5 rounded-full hover:shadow-lg hover:shadow-prometheus-accent/30 transition-all duration-300 hover:-translate-y-1";

  return (
    <button
      onClick={toggleTheme}
      className={buttonClasses}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <div className="relative z-10 text-white">
        {theme === "dark" ? (
          <i className="fas fa-sun text-lg theme-toggle-icon"></i>
        ) : (
          <i className="fas fa-moon text-lg theme-toggle-icon"></i>
        )}
      </div>
      <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
    </button>
  );
};

export default ThemeToggleButton;
